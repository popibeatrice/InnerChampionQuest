import PainPoint from "./PainPoint";

import RevealButton from "./RevealButton";

function HookSec() {
  return (
    <section className="mx-6 flex flex-col items-center gap-24 pt-10 xxs:pt-12 xs:mx-14 xs:gap-36 md:pt-16 xl:gap-56 xl:pt-28">
      <h2 className="self-start text-3xl xxs:text-4xl xs:self-center xs:text-center md:text-5xl xl:text-6xl 2xl:text-7xl">
        TRANSFORM YOUR WORLD BY FINDING YOUR <br />
        <span className="font-heydex text-2xl text-accentBlue xs:text-center xs:text-3xl md:text-4xl xl:text-6xl 2xl:text-7xl">
          Inner Champion Quest
        </span>
      </h2>
      <div className="flex flex-col items-center gap-16 md:gap-28 xl:gap-32 2xl:gap-40">
        <div className="md:gap-42 flex flex-col items-center gap-36 xl:gap-52 2xl:gap-64">
          <PainPoint>Prepare to leave your old life behind...</PainPoint>
          <PainPoint>
            This is the unfair advantage that will set you apart from everyone
            else.
          </PainPoint>
          <PainPoint>
            This is <span className="text-accentBlue">the last moment</span>{" "}
            before you begin your dream life.
          </PainPoint>
          <PainPoint>
            You being here is the first part of a chain effect.
          </PainPoint>
          <PainPoint>
            Are you prepared? Are you ready to build your dreams, or are you
            fine being like everybody else? I will be honest with you, the road
            ahead is difficult, but worth it.
          </PainPoint>
          <PainPoint>
            Of course, you might not be ready, I am confident you could find
            comfort in being mediocre.{" "}
            <span className="text-accentRed">Scrolling TikTok</span>, playing
            video games and watching porn, all of that while getting ready for a{" "}
            <span className="text-accentRed">shitty job</span> is enough to
            distract you.
          </PainPoint>
          <PainPoint>
            If you are still here,{" "}
            <span className="text-accentBlue">congratulations</span>.
            Determination is everything. Use it. <br />
            With determination you will level up in each chapter of your life.
          </PainPoint>
          <PainPoint>
            Imagine actually making real progress as an entrepreneur.
          </PainPoint>
          <PainPoint>
            Then very soon, before you even realize, you’re making more than
            both your parents.
          </PainPoint>
          <PainPoint accent="#009EE1">
            Imagine putting yourself in the skin of a high value man. Your
            actions command respect from men and admiration in the eyes of
            women.
          </PainPoint>
          <PainPoint>
            I was blessed with a lot of challenges and the power to overpass
            them. Every trial was a{" "}
            <span className="text-accentBlue">life-changing</span> experience
            and after years of hard work, I’ve finally been able to become proud
            of myself and experience the highs of life.
          </PainPoint>
          <PainPoint>
            I know that you are somewhat like me, otherwise you wouldn’t be
            here. You want to change and overcome your{" "}
            <span className="text-accentRed">weaknesses</span>.
          </PainPoint>
          <PainPoint>You just don’t know how yet.</PainPoint>
          <PainPoint>Today that comes to an end.</PainPoint>
          <PainPoint>You just found everything you were missing.</PainPoint>
          <PainPoint accent="#E0284F">
            <span className="text-2xl xxs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl">
              What are you waiting for?
            </span>
          </PainPoint>
        </div>
        <RevealButton>Start now</RevealButton>
      </div>
      <div className="min-h-[10px]"></div>
    </section>
  );
}

export default HookSec;
