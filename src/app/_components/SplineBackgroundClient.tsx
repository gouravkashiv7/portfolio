"use client";

import dynamic from "next/dynamic";

const SplineBackgroundDynamic = dynamic(
  () => import("@/app/_components/SplineBackground"),
  { ssr: false },
);

export default function SplineBackgroundClient() {
  return <SplineBackgroundDynamic />;
}
