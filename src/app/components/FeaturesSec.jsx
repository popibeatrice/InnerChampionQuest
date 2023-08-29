import FeatureComponent from "./FeatureComponent";
import FeaturePoint from "./FeaturePoint";

import lessonIcon from "../../../public/webinar.png";
import socialIcon from "../../../public/icons8-leader.svg";
import growthIcon from "../../../public/chart-up.png";

import BuyButton from "./BuyButton";
import SectionLine from "./SectionLine";

function FeaturesSec() {
  return (
    <section className="bgParalax min-h-screen lg:bg-fixed">
      <SectionLine />
      <div className="flex flex-col items-center gap-16 pb-40 pt-20 sm:gap-20 lg:gap-32">
        <h2 className="relative isolate block self-center bg-opacity-0 font-heydex text-3xl after:absolute after:bottom-3 after:left-0 after:right-0 after:-z-10 after:mx-auto after:h-3 after:w-full  after:bg-accentBlue after:blur-[15px] xxs:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl">
          The Champion Skills
        </h2>
        <div className="grid w-full grid-cols-1 justify-items-center gap-28 xs:gap-36 sm:gap-44 lg:gap-56">
          <FeatureComponent title={"Custom tailored lessons"} icon={lessonIcon}>
            <FeaturePoint
              text={
                <span>
                  Over{" "}
                  <span className="font-bold text-accentBlue">
                    25+ materials
                  </span>{" "}
                  designed for you.
                </span>
              }
            />
            <FeaturePoint text={"Aid on each step of your journey."} />
            <FeaturePoint
              text={
                <span>
                  Master these{" "}
                  <span className="font-bold text-accentBlue">
                    important skills
                  </span>{" "}
                  you are missing on.
                </span>
              }
            />
          </FeatureComponent>
          <FeatureComponent title={"Access to a new life"} icon={growthIcon}>
            <FeaturePoint
              text={
                <span>
                  Unlock{" "}
                  <span className="font-bold text-accentBlue">
                    unlimited drive
                  </span>{" "}
                  and motivation.
                </span>
              }
            />
            <FeaturePoint
              text={
                <span>
                  Get rid of{" "}
                  <span className="font-bold text-accentRed">bad habits</span>{" "}
                  by rewiring your brain.
                </span>
              }
            />
            <FeaturePoint text={"Gain supreme confidence."} />
          </FeatureComponent>
          <FeatureComponent
            title={"Crafting a fulfilling social life"}
            icon={socialIcon}
          >
            <FeaturePoint
              text={
                <span>
                  Demand the{" "}
                  <span className="font-bold text-accentBlue">respect</span> of
                  other <span className="font-bold text-accentRed">men</span>.
                </span>
              }
            />
            <FeaturePoint
              text={
                <span>
                  Make <span className="font-bold text-accentBlue">women</span>{" "}
                  chase <span className="font-bold text-accentBlue">you</span>.
                </span>
              }
            />
            <FeaturePoint text={"Become a leader in your community."} />
          </FeatureComponent>
        </div>
        <BuyButton>Join now</BuyButton>
      </div>
    </section>
  );
}

export default FeaturesSec;
