function PhaseComponent({ phaseNr, phaseName, children }) {
  return (
    <div className="group flex h-full w-[90%] flex-col items-center justify-start gap-14 py-6 transition-all duration-300  xl:gap-24  xl:py-8 xl:hover:scale-110">
      <div className="relative isolate flex w-full grow-0 flex-col items-center justify-center gap-3 after:absolute after:left-0 after:right-0 after:top-[-10%] after:-z-10 after:mx-auto after:h-12 after:w-12 after:rounded-full after:bg-zinc-100 after:blur-[30px] lg:after:h-20 lg:after:w-20 lg:after:blur-[60px] xl:group-hover:after:bg-accentBlue">
        <h3 className="text-center text-2xl transition-all duration-300 xxs:text-3xl md:text-4xl xl:text-5xl xl:group-hover:text-accentBlue">
          Phase {phaseNr}
        </h3>
        <h4 className="text-center font-popuca text-zinc-400 xxs:text-lg md:text-xl xl:text-2xl">
          {phaseName}
        </h4>
      </div>
      <div className="flex w-full grow flex-col items-center justify-start gap-14">
        {children}
      </div>
    </div>
  );
}

export default PhaseComponent;
