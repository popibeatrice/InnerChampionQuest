function PhasePoint({
  descp = "Understanding the program",
  name = "introduction",
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center text-white lg:px-2">
      <div className="text-xl xxs:text-2xl md:text-3xl xl:text-4xl">{name}</div>
      <span className="block max-w-xs font-popuca text-zinc-400 transition-all duration-300 xl:text-lg xl:group-hover:text-white">
        {descp}
      </span>
    </div>
  );
}

export default PhasePoint;
