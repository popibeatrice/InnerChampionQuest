import Header from "./components/Header";
import Hero from "./components/Hero";
import NewsLetter from "./components/NewsLetter";
import HookSec from "./components/HookSec";
import FeaturesSec from "./components/FeaturesSec";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen">
        <Header />
        <Hero />
      </div>
      <NewsLetter />
      <HookSec />
      <FeaturesSec />
    </main>
  );
}
