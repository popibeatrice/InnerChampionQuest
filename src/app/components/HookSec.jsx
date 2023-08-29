import PainPoint from "./PainPoint";

import RevealButton from "./RevealButton";

function HookSec() {
  return (
    <section className="flex flex-col items-center gap-16 overflow-hidden px-6 pb-24 pt-10 xxs:pt-12 xs:gap-24 xs:px-14 md:pt-16 lg:pb-36 xl:gap-36 xl:pt-28">
      <h2 className="self-start text-3xl xxs:text-4xl xs:self-center xs:text-center md:text-5xl xl:text-6xl 2xl:text-7xl">
        TRANSFORM YOUR WORLD BY FINDING YOUR <br />
        <span className="font-heydex text-2xl text-accentBlue xs:text-center xs:text-3xl md:text-4xl xl:text-6xl 2xl:text-7xl">
          Inner Champion Quest
        </span>
      </h2>
      <div className="flex flex-col items-center gap-16 md:gap-28 xl:gap-32 2xl:gap-40">
        <div className="flex flex-col items-center gap-24 md:gap-36 xl:gap-48 2xl:gap-52">
          <PainPoint>Prepare to leave your old life behind...</PainPoint>
          <PainPoint dir="10vw">
            You being here is the first part of a chain effect.
          </PainPoint>
          <PainPoint>
            Are you prepared? Are you ready to build{" "}
            <span className="text-accentBlue">your dreams</span>, or are you
            fine being like{" "}
            <span className="text-accentRed">everybody else</span>? I will be
            honest with you, the road ahead is difficult, but worth it.
          </PainPoint>
          <PainPoint dir="10vw">
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
            Determination is everything. Use it.
          </PainPoint>
          <PainPoint dir="10vw">
            Imagine actually making real progress as an entrepreneur.
          </PainPoint>
          <PainPoint>
            Imagine putting yourself in the skin of a{" "}
            <span className="text-accentBlue">high value man</span> . Your
            actions command respect from men and admiration in the eyes of
            women.
          </PainPoint>
          <PainPoint dir="10vw">
            I was blessed with a lot of challenges and the power to overpass
            them. Every trial was a{" "}
            <span className="text-accentBlue">life-changing</span> experience
            and after years of hard work, I’ve finally been able to become proud
            of myself and experience the highs of life. <br /> I know that you
            are somewhat like me, otherwise you wouldn’t be here. You want to
            change and overcome your{" "}
            <span className="text-accentRed">weaknesses</span>.
          </PainPoint>
          <PainPoint>You just don’t know how yet.</PainPoint>
          <PainPoint dir="10vw">
            Luckly, you just found{" "}
            <span className="text-accentBlue">everything</span> you were
            missing.
          </PainPoint>
          <PainPoint accent="#E0284F">
            <span className="text-2xl xxs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl">
              What are you waiting for?
            </span>
          </PainPoint>
        </div>
        <RevealButton>Start now</RevealButton>
      </div>
    </section>
  );
}

export default HookSec;
