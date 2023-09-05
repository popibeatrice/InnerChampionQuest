"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

import newsletterMan from "../../../public/newsletter_man.jpg";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { motion, AnimatePresence } from "framer-motion";

import axios from "axios";

let wasOpened = false;

export default function NewsLetter() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (wasOpened) return;
      setIsOpen(true);
    }, 3000);
  }, []);

  function handleClick() {
    setIsOpen((actual) => !actual);
    wasOpened = true;
  }

  return (
    <div className="fixed bottom-5 right-0 z-30 flex flex-col-reverse items-end justify-end gap-4 pr-4">
      <PopupButton handleClick={handleClick} />
      {
        <AnimatePresence>
          {isOpen && <PopoupWindow closePopup={handleClick} />}
        </AnimatePresence>
      }
    </div>
  );
}

function PopupButton({ handleClick }) {
  return (
    <motion.button
      type="button"
      layout
      whileTap={{ scale: 0.8 }}
      onClick={handleClick}
      className=" flex h-12 w-12 items-center justify-center rounded-[50%] bg-accentRed lg:h-14 lg:w-14"
    >
      <Image
        alt="Newsletter popup button"
        src="/icons8-free.svg"
        width={64}
        priority={true}
        height={64}
        className="h-[75%] w-[75%] "
      ></Image>
    </motion.button>
  );
}

function PopoupWindow({ closePopup }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function HandleChange(e) {
    setEmail(e.target.value);
  }

  async function HandleSubmit(e) {
    e.preventDefault();
    if (email === "") {
      setError("please fill out the email input");
      return;
    }
    try {
      setIsLoading(true);
      const res = await axios.post("/api/newsletter", {
        email,
      });
      console.log(res);
      setError("");
      closePopup();
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    } finally {
      setIsLoading(false);
      setEmail("");
    }
  }

  return (
    <motion.div
      key="modal"
      initial={{
        y: 20,
        opacity: 0,
        scaleY: 0,
        transformOrigin: "bottom",
      }}
      transition={{
        duration: 0.3,
        type: "spring",
        damping: 14,
        stiffness: 150,
      }}
      animate={{ y: 0, opacity: 1, scaleY: 1 }}
      exit={{ y: 20, opacity: 0, scaleY: 0 }}
      className="relative mr-2 flex h-[65vh] max-h-[600px] min-h-[175px] w-[70vw] max-w-sm flex-col overflow-y-auto rounded-xl"
    >
      <div className="relative h-[60%] min-h-[175px] w-full overflow-hidden rounded-t-xl">
        <Image
          alt="Newsletter popup button"
          src={newsletterMan}
          fill
          priority={true}
          placeholder="blur"
          style={{
            objectFit: "cover",
          }}
          className="object-top"
        ></Image>
        <h3 className="absolute bottom-5 right-0 z-10 w-[90%] max-w-[220px] rounded bg-zinc-900 bg-opacity-90 p-2 text-end text-3xl xs:w-[80%] lg:text-4xl ">
          Get a free chapter now
        </h3>
      </div>
      <div className="flex grow flex-col justify-center rounded-b-xl bg-white p-4">
        <form
          onSubmit={(e) => HandleSubmit(e)}
          action=""
          className="flex flex-col gap-4 font-popuca"
        >
          <label
            className="text-lg text-zinc-900 xl:text-xl"
            htmlFor="email-stealer"
          >
            Join our action driven comunity.
          </label>
          <div className="flex flex-col gap-2">
            <Input
              onChange={(e) => HandleChange(e)}
              id="email-stealer"
              value={email}
              className={`font-popuca text-black ${
                error !== ""
                  ? email === ""
                    ? "border border-red-600 focus-visible:border-input"
                    : ""
                  : ""
              }`}
              placeholder="Your email..."
            />
            {error !== "" && email === "" && (
              <p className="text-red-600">*{error}</p>
            )}
          </div>

          <Button
            disabled={isLoading}
            className="duration-300 hover:bg-accentBlue focus-visible:bg-accentBlue focus-visible:ring-0 sm:text-xl"
          >
            JOIN NOW
          </Button>
        </form>
      </div>
    </motion.div>
  );
}
