"use client";

import type { ComponentType } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import SplineErrorBoundary from "@/app/_components/SplineErrorBoundary";
import { isWebGLAvailableAndPerformant } from "@/utils/detectWebGLCapabilities";

interface SplineBackgroundProps {
  onLoaded?: () => void;
  onError?: () => void;
}

export default function SplineBackgroundClient() {
  const [SplineComponent, setSplineComponent] =
    useState<ComponentType<SplineBackgroundProps> | null>(null);
  const [hasFailed, setHasFailed] = useState(false);
  const loadTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleError = useCallback(() => {
    setHasFailed(true);
    setSplineComponent(null);
  }, []);

  const handleLoaded = useCallback(() => {
    if (loadTimeoutRef.current) {
      clearTimeout(loadTimeoutRef.current);
      loadTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    // 1. Check if device has sufficient hardware & GPU acceleration
    if (!isWebGLAvailableAndPerformant()) {
      setHasFailed(true);
      return;
    }

    const loadSpline = () => {
      // 2. Safety timeout: if 3D scene takes > 8 seconds to compile/load, cancel to avoid hanging slow CPUs
      loadTimeoutRef.current = setTimeout(() => {
        console.warn(
          "Spline 3D load timed out. Staying on lightweight ambient background.",
        );
        handleError();
      }, 8000);

      import("@/app/_components/SplineBackground")
        .then((mod) => {
          setSplineComponent(() => mod.default);
        })
        .catch((err) => {
          console.warn("Failed to dynamically import Spline:", err);
          handleError();
        });
    };

    // 3. Defer loading until browser is idle to protect TBT and LCP
    if ("requestIdleCallback" in window) {
      const handle = (
        window as unknown as {
          requestIdleCallback: (
            cb: () => void,
            opts?: { timeout: number },
          ) => number;
        }
      ).requestIdleCallback(loadSpline, { timeout: 4000 });

      return () => {
        if ("cancelIdleCallback" in window) {
          (
            window as unknown as { cancelIdleCallback: (id: number) => void }
          ).cancelIdleCallback(handle);
        }
        if (loadTimeoutRef.current) {
          clearTimeout(loadTimeoutRef.current);
        }
      };
    }

    const timer = setTimeout(loadSpline, 3000);
    return () => {
      clearTimeout(timer);
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current);
      }
    };
  }, [handleError]);

  return (
    <div className="fixed inset-0 w-full h-full -z-100 pointer-events-none bg-background overflow-hidden">
      {/* 
        High-End Ambient CSS Fallback:
        Always active across all devices, ensuring the portfolio looks atmospheric,
        deep, and polished even on low-end CPUs, mobile devices, and older browsers.
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] lg:w-[750px] lg:h-[750px] rounded-full bg-accent/15 blur-[120px] transition-opacity duration-1000 pointer-events-none" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-accent/10 blur-[140px] transition-opacity duration-1000 pointer-events-none" />
      </div>

      {/* Protective edge gradients for navigation and footer contrast */}
      <div className="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-linear-to-t from-background to-transparent pointer-events-none" />

      {/* Radial vignette for central typography readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_100%)] opacity-70 pointer-events-none" />

      {/* Safely guarded 3D Spline scene - only renders on capable hardware */}
      {SplineComponent && !hasFailed && (
        <SplineErrorBoundary onError={handleError}>
          <SplineComponent onLoaded={handleLoaded} onError={handleError} />
        </SplineErrorBoundary>
      )}
    </div>
  );
}
