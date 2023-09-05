import Image from "next/image";

import checkIcon from "../../../public/icons8-checkmark.svg";
import crossIcon from "../../../public/icons8-cross.svg";

import BuyButton from "./BuyButton";

function BuySec() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center bg-zinc-900 py-10">
      <div className="winner absolute left-0 top-0 -z-10 w-1/2 md:h-full"></div>
      <div className="loser absolute right-0 top-0 -z-10 w-1/2 md:h-full"></div>
      <div className="flex w-[90%] max-w-3xl flex-col items-center justify-center gap-20 xxs:w-[85%] md:flex-row md:gap-0 xl:max-w-5xl">
        <div className="flex flex-col items-center justify-center gap-8 bg-zinc-800 p-8 shadow-xl shadow-black lg:p-10">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h2 className="text-3xl xxs:text-4xl lg:text-5xl">
              Become a Champion
            </h2>
            <span className="font-popuca text-xl text-zinc-400 xxs:text-2xl lg:text-3xl">
              <span className="font-bold text-accentBlue">Follow</span> your{" "}
              <span className="whitespace-nowrap font-bold text-white">
                Inner Quest
              </span>
            </span>
          </div>
          <span className="text-5xl text-accentBlue xxs:text-6xl lg:text-7xl">
            $49.99
          </span>
          <div className="flex flex-col items-start justify-start gap-3 self-start font-popuca xxs:text-lg lg:text-xl">
            <div className="flex flex-col items-start justify-start gap-3">
              <GoodPoint>
                Become{" "}
                <span className="whitespace-nowrap font-bold text-white">
                  strong & wealthy
                </span>
              </GoodPoint>
              <GoodPoint>
                Aquire <span className="font-bold text-white">respect</span>
              </GoodPoint>
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <GoodPoint>
                Attract <span className="font-bold text-white">females</span>
              </GoodPoint>
              <GoodPoint>
                Become{" "}
                <span className="whitespace-nowrap font-bold text-white">
                  proud & happy
                </span>
              </GoodPoint>
            </div>
          </div>
          <BuyButton>Buy now</BuyButton>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 bg-zinc-800 bg-opacity-70 p-8 lg:p-10">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h2 className="text-3xl xxs:text-4xl lg:text-5xl">Stay a loser</h2>
            <span className="font-popuca text-xl text-zinc-400 xxs:text-2xl lg:text-3xl">
              <span className="font-bold text-accentRed">Miss</span> your{" "}
              <span className="whitespace-nowrap font-bold text-white">
                Inner Quest
              </span>
            </span>
          </div>
          <span className="text-center text-2xl text-accentRed xxs:text-3xl lg:text-4xl">
            It costs your success
          </span>
          <div className="flex flex-col items-start justify-start gap-3 self-start font-popuca xxs:text-lg lg:text-xl">
            <div className="flex flex-col items-start justify-start gap-3">
              <BadPoint>Work a 9-5</BadPoint>
              <BadPoint>Stay unknown</BadPoint>
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <BadPoint>Live a sad and anxious life</BadPoint>
              <BadPoint>Lack confidence</BadPoint>
            </div>
          </div>
          <span className="text-3xl text-accentRed xxs:text-4xl lg:text-5xl">
            Sounds good?
          </span>
        </div>
      </div>
    </section>
  );
}

function GoodPoint({ children }) {
  return (
    <div className="flex items-center justify-start gap-3 text-zinc-400">
      <Image alt="check" src={checkIcon} width={32} height={32} className="" />
      <span>{children}</span>
    </div>
  );
}

function BadPoint({ children }) {
  return (
    <div className="flex items-center justify-start gap-3 text-zinc-400">
      <Image alt="check" src={crossIcon} width={32} height={32} className="" />
      <span>{children}</span>
    </div>
  );
}

export default BuySec;
