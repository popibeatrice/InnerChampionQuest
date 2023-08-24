function Hero() {
  return (
    <div className="mx-6 mt-[20vh] flex animate-fade-in flex-col items-start justify-start gap-3 xs:mx-14 sm:mx-16 md:mx-20 xl:mx-36 2xl:mx-40">
      <h1 className="text-3xl xxs:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl">
        Unleash &nbsp;&nbsp;
        <span className="font-heydex text-4xl text-accentRed xxs:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">
          your
        </span>
        &nbsp;&nbsp; true{" "}
        <span className="whitespace-nowrap">potential now</span>
      </h1>
      <p className="max-w-[200px] font-popuca text-sm text-gray-400 xxs:max-w-[240px] xs:max-w-[300px] xs:text-base sm:max-w-sm sm:text-lg md:max-w-md xl:text-xl 2xl:max-w-xl">
        Transform your life, own every aspect, and conquer your future. Join the
        journey, it&#39;s time to rise!
      </p>
    </div>
  );
}

export default Hero;
