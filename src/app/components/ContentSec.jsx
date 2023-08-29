import PhaseComponent from "./PhaseComponent";
import SectionLine from "./SectionLine";
import PhasePoint from "./PhasePoint";

function ContentSec() {
  return (
    <section className="min-h-screen overflow-hidden">
      <SectionLine />
      <div className="flex grow-0 flex-col items-center gap-24 pb-40 pt-20">
        <h2 className="font-heydex text-3xl xxs:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl">
          The Champion Arch
        </h2>
        <div className="grid w-full grow grid-cols-1 justify-items-center gap-20 xl:grid-cols-3">
          <PhaseComponent
            phaseName={"Finding the quest"}
            key={1}
            phaseNr={"one"}
          >
            <PhasePoint descp="Understanding the program" name="First Step" />
            <PhasePoint
              descp="Specific Questions That Will Help Discover Your Interests"
              name="Finding your quest"
            />
            <PhasePoint
              descp="Teaching How To ACTUALLY Learn ( 90% were failed by the education system )"
              name="Rewiring your brain"
            />
            <PhasePoint
              descp="Highlighted The Common Mistakes And How To Overcome Them
              "
              name="Common Pitfalls"
            />
          </PhaseComponent>
          <PhaseComponent
            phaseName={"Preparing for the quest"}
            key={2}
            phaseNr={"two"}
          >
            <PhasePoint
              descp="Optimizing Your Brain Performance, Mood, and Health"
              name="Sleep"
            />
            <PhasePoint
              descp="Retrieving the Full Potential of Your Mind"
              name="Reversing The Brainwash"
            />
            <PhasePoint
              descp="Maximizing Muscle Mass and The Side Effects On Your Mental"
              name="Training"
            />
            <PhasePoint
              descp="Fueling The Energy To Embark On Your Quest"
              name="Nutrition"
            />
          </PhaseComponent>
          <PhaseComponent
            phaseName={"Becoming the champion"}
            key={3}
            phaseNr={"three"}
          >
            <PhasePoint
              descp="Fulfilling Your Financial Goals"
              name="High-Income Skill"
            />
            <PhasePoint
              descp="Mastering the Right Way of Thinking"
              name="Developing the Right Mindset"
            />
            <PhasePoint
              descp="Gain Respect of Man and Adoration of Woman"
              name="Become a Leader"
            />
          </PhaseComponent>
        </div>
      </div>
    </section>
  );
}

export default ContentSec;
