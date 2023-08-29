"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

function SectionLine() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: "some",
  });
  return (
    <div
      className={`h-0.5 w-1 opacity-0 ${isInView ? "line" : ""}`}
      ref={ref}
    ></div>
  );
}

export default SectionLine;
