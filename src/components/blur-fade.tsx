"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  inView?: boolean;
  inViewMargin?: string;
}

export function BlurFade({
  children,
  className,
  delay = 0,
  inView = true,
  inViewMargin = "-50px",
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, {
    once: true,
    margin: inViewMargin,
    amount: 0.1,
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const shouldAnimate = inView ? isInView : true;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={
        shouldAnimate
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 20, filter: "blur(8px)" }
      }
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}