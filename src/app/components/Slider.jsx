"use client";

import { useState } from "react";

import Image from "next/image";

import Img from "../../../public/newsletter_man.jpg";

import { motion } from "framer-motion";

const slides = [
  <Slide
    key={1}
    name="Alin"
    quote={<span>This changed my life forever. I am so happy now.</span>}
  />,
  <Slide
    key={2}
    name="Merlin"
    quote={
      <span>
        This changed my life forever. I am so happy now. Lorem ipsum dolor sit
        ame?
      </span>
    }
  />,
  <Slide
    key={3}
    name="Matei"
    quote={<span>This changed my life forever. I am so happy now.</span>}
  />,
];

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  function handleRightClick() {
    if (slideIndex === slides.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  }
  function handleLeftClick() {
    if (slideIndex === 0) {
      setSlideIndex(slides.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  }

  return (
    <div className="relative isolate flex h-[450px] w-[90%] max-w-md flex-col items-center justify-center xxs:h-[575px] xs:h-[600px] xs:w-[80%] md:max-w-2xl lg:h-[680px] lg:max-w-4xl 2xl:max-w-6xl">
      <Arrow handleClick={handleLeftClick} poz="left" />
      <div className="w-full">{slides[slideIndex]}</div>
      <Arrow handleClick={handleRightClick} poz="right" />
    </div>
  );
}

function Slide({ name = "caca", quote = "pipi" }) {
  return (
    <motion.div
      animate={{ opacity: 1, y: "0%", scale: 1, skewX: "0deg" }}
      initial={{ opacity: 0, y: "10%", scale: 0.8, skewX: "5deg" }}
      transition={{
        duration: 2.5,
        type: "spring",
        bounce: 0.4,
      }}
      className="flex w-full flex-col items-center justify-start gap-4 p-1 lg:items-start lg:gap-8 lg:p-8"
    >
      <div className="flex w-full items-center justify-center gap-5 lg:justify-start">
        <h3 className="font-heydex text-4xl xxs:text-5xl md:text-6xl lg:text-7xl">
          {name}
        </h3>
        <div className="hidden rounded-xl bg-white lg:block lg:h-0.5 lg:grow"></div>
      </div>
      <div className="flex w-full flex-col-reverse items-center justify-center gap-5 px-3 lg:flex-row lg:items-center lg:gap-10">
        <Image
          alt={`${name} img`}
          src={Img}
          sizes="30vw"
          style={{
            height: "auto",
          }}
          className="w-10/12 max-w-xs lg:w-1/2 lg:max-w-sm"
        />
        <p className="max-w-md grow basis-0 text-center font-popuca text-lg xxs:text-xl lg:max-w-lg lg:text-2xl">
          {quote}
        </p>
      </div>
    </motion.div>
  );
}

function Arrow({ handleClick, poz }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        (poz === "left" ? " -left-[4%] " : " -right-[4%] ") +
        "absolute top-1/2 z-10 -translate-y-1/2 transition-all duration-300 hover:scale-110"
      }
    >
      <Image
        alt="left arrow"
        src="/icons8-arrow.svg"
        height={64}
        width={64}
        className={
          (poz === "left" ? "rotate-180" : "") + " h-10 w-10 sm:h-16 sm:w-16"
        }
      />
    </button>
  );
}

export default Slider;
