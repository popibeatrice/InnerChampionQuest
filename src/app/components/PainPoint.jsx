"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

function PainPoint({ children, dir = "-20vw", accent = "#ffffff" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
    margin: "0px 300px -10% 300px",
  });
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : `translateX(${dir})`,
        opacity: isInView ? 1 : 0,
        color: isInView ? accent : "#ffffff",
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="w-[95%] max-w-5xl text-center text-xl xxs:text-2xl lg:text-3xl 2xl:text-4xl"
    >
      {children}
    </div>
  );
}

export default PainPoint;
