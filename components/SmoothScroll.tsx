"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

/**
 * Client wrapper that enables smooth inertial scrolling across the whole app.
 * Disabled automatically when prefers-reduced-motion is set — a11y win with
 * no config cost. `anchors: true` also gives us smooth anchor-link jumps
 * for free, so the native CSS scroll-behavior is redundant.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        smoothWheel: true,
        autoRaf: true,
        anchors: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
