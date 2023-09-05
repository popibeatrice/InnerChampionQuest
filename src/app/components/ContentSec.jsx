import PhaseComponent from "./PhaseComponent";
import SectionLine from "./SectionLine";
import PhasePoint from "./PhasePoint";
import BuyButton from "./BuyButton";

function ContentSec() {
  return (
    <section className="min-h-screen overflow-hidden">
      <SectionLine />
      <div className="flex grow-0 flex-col items-center gap-16 pb-40 pt-20">
        <h2 className="font-heydex text-3xl xxs:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl">
          The Champion Arch
        </h2>
        <div className="grid w-full grow grid-cols-1 place-content-center justify-items-center gap-20 xl:grid-cols-3 xl:gap-8 xl:px-5 2xl:gap-10">
          <PhaseComponent
            phaseName={"Finding the quest"}
            key={1}
            phaseNr={"one"}
          >
            <PhasePoint descp="Understanding the program." name="First Step" />
            <PhasePoint
              descp="Specific questions that will help you discover your interests."
              name="Finding your quest"
            />
            <PhasePoint
              descp="How to ACTUALLY learn ( 90% were failed by the education system )."
              name="Rewiring your brain"
            />
            <PhasePoint
              descp="Highlighting the common mistakes and how to overcome them."
              name="Common Pitfalls"
            />
          </PhaseComponent>
          <PhaseComponent
            phaseName={"Preparing for the quest"}
            key={2}
            phaseNr={"two"}
          >
            <PhasePoint
              descp="Optimizing your brain performance, mood, and health."
              name="Sleep"
            />
            <PhasePoint
              descp="Retrieving the full potential of your mind."
              name="Reversing The Brainwash"
            />
            <PhasePoint
              descp="Maximizing muscle mass and the benefits for your mental strength."
              name="Training"
            />
            <PhasePoint
              descp="Fueling the energy to embark on your quest."
              name="Nutrition"
            />
          </PhaseComponent>
          <PhaseComponent
            phaseName={"Becoming the champion"}
            key={3}
            phaseNr={"three"}
          >
            <PhasePoint
              descp="Fulfilling your financial Goals."
              name="High-Income Skill"
            />
            <PhasePoint
              descp="Mastering the right way of thinking."
              name="Developing the Right Mindset"
            />
            <PhasePoint
              descp="Gain respect of man and adoration of woman."
              name="Become a Leader"
            />
          </PhaseComponent>
        </div>
        <BuyButton>Take Action</BuyButton>
      </div>
    </section>
  );
}

export default ContentSec;
