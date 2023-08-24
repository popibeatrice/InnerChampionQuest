"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsLetter() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((actual) => !actual);
  }

  return (
    <div className="fixed bottom-5 right-0 mt-20 flex flex-col-reverse items-end justify-end gap-4 pr-4">
      <PopupButton handleClick={handleClick} />
      {isOpen && <PopoupWindow closePopup={handleClick} />}
    </div>
  );
}

function PopupButton({ handleClick }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className=" flex h-12 w-12 items-center justify-center rounded-[50%] bg-accentRed lg:h-14 lg:w-14"
    >
      <Image
        alt="Newsletter popup button"
        src="/icons8-free.svg"
        width={64}
        height={64}
        className="h-[75%] w-[75%] "
      ></Image>
    </button>
  );
}

function PopoupWindow({ closePopup }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function HandleChange(e) {
    setEmail(e.target.value);
  }

  function HandleSubmit(e) {
    e.preventDefault();
    if (email === "") {
      setError("please fill out the email input");
      return;
    }
    console.log(email);
    setEmail("");
    setError("");
    closePopup();
  }

  return (
    <div className="relative mr-2 flex h-[60vh] max-h-[500px] min-h-[160px] w-[70vw] max-w-sm flex-col overflow-y-auto rounded-xl">
      <div className="relative h-[60%] min-h-[150px] w-full  overflow-hidden rounded-t-xl">
        <Image
          alt="Newsletter popup button"
          src="/newsletter_man.jpg"
          fill
          style={{
            objectFit: "cover",
          }}
          className="object-top"
        ></Image>
        <h3 className="absolute bottom-5 right-0 z-10 w-[90%] max-w-[220px] rounded bg-zinc-900 bg-opacity-80 p-2 text-end text-3xl xs:w-[80%] lg:text-4xl ">
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
            className="text-2xl"
            htmlFor="email-stealer"
            className="text-zinc-900"
          >
            Join our action driven comunity
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

          <Button className="duration-300 hover:bg-accentBlue focus-visible:bg-accentBlue focus-visible:ring-0 sm:text-xl">
            JOIN NOW
          </Button>
        </form>
      </div>
    </div>
  );
}
