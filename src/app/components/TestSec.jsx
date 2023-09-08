import BuyButton from "./BuyButton";
import Slider from "./Slider";

function TestSec() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-start gap-4 overflow-hidden px-3 pb-10 pt-20 xs:gap-8">
      <h2 className="text-center font-heydex text-4xl xxs:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">
        Other Champions
      </h2>
      <Slider />
      <BuyButton>Improve now</BuyButton>
    </section>
  );
}

export default TestSec;
