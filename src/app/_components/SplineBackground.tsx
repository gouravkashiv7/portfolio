"use client";

import Spline from "@splinetool/react-spline";
import { useState } from "react";

export default function SplineBackground() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="fixed inset-0 w-full h-full -z-100 pointer-events-none bg-background">
      {/* Reduced opacity to ensure text on the page remains readable */}
      <div
        className={`absolute inset-0 pointer-events-none md:pointer-events-auto transition-opacity duration-1500 ${
          isLoaded ? "opacity-20 md:opacity-30" : "opacity-0"
        }`}
      >
        <div className="w-full h-full transform scale-[1.3] -translate-x-10 sm:scale-125 sm:translate-x-0 md:scale-100 md:translate-x-0 transition-transform duration-700">
          <Spline
            scene="https://prod.spline.design/OBRwitHW0RS-IMXY/scene.splinecode"
            className="w-full h-full object-cover"
            style={{ background: "transparent" }}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </div>

      {/* Protective gradients for top (nav) and bottom (footer) edges */}
      <div className="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-linear-to-t from-background to-transparent pointer-events-none" />

      {/* Radial vignette for central focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_100%)] opacity-70 pointer-events-none" />
    </div>
  );
}
