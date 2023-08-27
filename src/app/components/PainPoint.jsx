"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

function PainPoint({ children, accent = "#ffffff" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.4,
    margin: "0px 300px -10% 300px",
  });
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        color: isInView ? accent : "#ffffff",
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="w-[95%] max-w-5xl text-center text-xl xxs:text-2xl sm:text-3xl  xl:text-4xl 2xl:text-5xl"
    >
      {children}
    </div>
  );
}

export default PainPoint;
