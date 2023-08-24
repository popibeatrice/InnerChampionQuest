import Header from "./components/Header";
import Hero from "./components/Hero";
import NewsLetter from "./components/NewsLetter";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NewsLetter />
      </main>
    </>
  );
}
