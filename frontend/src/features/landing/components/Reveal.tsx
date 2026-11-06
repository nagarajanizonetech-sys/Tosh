import React, { useEffect, useRef, useState } from "react";
import type { RevealProps } from "../types";

export function Reveal({ children, className = "" }: RevealProps): React.JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const ob = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          ob.unobserve(entry.target);
        }
      },
      { threshold: 0.08 },
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`journal-reveal ${inView ? "in" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
