function PhasePoint({
  descp = "Understanding the program",
  name = "introduction",
}) {
  return (
    <div className="flex  h-full w-full flex-col items-center justify-center text-center text-white lg:px-10">
      <div className=" xxs:text-lg md:text-xl xl:text-2xl">{name}</div>
      <span className="block max-w-xs font-popuca text-zinc-400 transition-all duration-300 xl:group-hover:text-white">
        {descp}
      </span>
    </div>
  );
}

export default PhasePoint;
