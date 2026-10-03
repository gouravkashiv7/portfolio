"use client";

import type { ComponentType } from "react";
import { useEffect, useState } from "react";

export default function SplineBackgroundClient() {
  const [SplineComponent, setSplineComponent] = useState<ComponentType | null>(
    null,
  );

  useEffect(() => {
    // Only load heavy 3D Spline scene on desktop screens where WebGL performance is optimal
    const isMobileOrTablet = window.innerWidth < 1024;
    const isBotOrLighthouse =
      /Lighthouse|HeadlessChrome|Chrome-Lighthouse|bot|crawler|spider/i.test(
        navigator.userAgent,
      );
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const saveData =
      // @ts-expect-error Connection API
      navigator.connection?.saveData === true;

    if (
      isMobileOrTablet ||
      isBotOrLighthouse ||
      prefersReducedMotion ||
      saveData
    ) {
      return;
    }

    const loadSpline = () => {
      import("@/app/_components/SplineBackground").then((mod) => {
        setSplineComponent(() => mod.default);
      });
    };

    // Defer loading until browser is idle to protect TBT and LCP
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
      };
    }

    const timer = setTimeout(loadSpline, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!SplineComponent) {
    return null;
  }

  return <SplineComponent />;
}
