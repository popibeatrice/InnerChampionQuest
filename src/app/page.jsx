import Header from "./components/Header";
import Hero from "./components/Hero";
import NewsLetter from "./components/NewsLetter";
import HookSec from "./components/HookSec";
import FeaturesSec from "./components/FeaturesSec";
import ContentSec from "./components/ContentSec";
import BuySec from "./components/BuySec";
import TestSec from "./components/TestSec";
import Questions from "./components/Questions";

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
      <ContentSec />
      <BuySec />
      <TestSec />
      <Questions />
    </main>
  );
}
