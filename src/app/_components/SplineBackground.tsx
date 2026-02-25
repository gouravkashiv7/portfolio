"use client";

import Spline from "@splinetool/react-spline";

export default function SplineBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-100 pointer-events-none bg-dark">
      {/* Reduced opacity to ensure text on the page remains readable */}
      <div className="absolute inset-0 opacity-25 md:opacity-30 pointer-events-auto">
        <Spline
          scene="https://prod.spline.design/NclPhMpkns9u1xM9/scene.splinecode"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Protective gradients for top (nav) and bottom (footer) edges */}
      <div className="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-dark to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-linear-to-t from-dark to-transparent pointer-events-none" />

      {/* Radial vignette for central focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,25,47,0.7)_100%)] pointer-events-none" />
    </div>
  );
}
