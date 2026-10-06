"use client";

import Spline from "@splinetool/react-spline";
import { useEffect, useRef, useState } from "react";

interface SplineBackgroundProps {
  onLoaded?: () => void;
  onError?: () => void;
}

export default function SplineBackground({
  onLoaded,
  onError,
}: SplineBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleContextLost = (e: Event) => {
      e.preventDefault();
      console.warn(
        "WebGL context lost. Falling back to ambient CSS background.",
      );
      onError?.();
    };

    container.addEventListener("webglcontextlost", handleContextLost, true);
    return () => {
      container.removeEventListener(
        "webglcontextlost",
        handleContextLost,
        true,
      );
    };
  }, [onError]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none md:pointer-events-auto transition-opacity duration-1500 ${
        isLoaded ? "opacity-20 md:opacity-30" : "opacity-0"
      }`}
    >
      <div className="w-full h-full transform scale-[1.3] -translate-x-10 sm:scale-125 sm:translate-x-0 md:scale-100 md:translate-x-0 transition-transform duration-700">
        <Spline
          scene="https://prod.spline.design/OBRwitHW0RS-IMXY/scene.splinecode"
          className="w-full h-full object-cover"
          style={{ background: "transparent" }}
          onLoad={() => {
            setIsLoaded(true);
            onLoaded?.();
          }}
        />
      </div>
    </div>
  );
}
