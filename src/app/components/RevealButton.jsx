"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

import BuyButton from "./BuyButton";

function RevealButton({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.4,
    margin: "0px 300px 100px 300px",
  });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <BuyButton>Start now</BuyButton>
    </div>
  );
}

export default RevealButton;
