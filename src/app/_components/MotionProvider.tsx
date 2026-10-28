"use client";

import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";

// Loads the small framer-motion feature set and honours the OS
// reduced-motion setting for every animation on the site.
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
