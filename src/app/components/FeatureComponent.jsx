import Image from "next/image";

function FeatureComponent({ title, icon, children }) {
  return (
    <div className="relative isolate flex w-[95%] max-w-lg flex-col items-start gap-6 bg-opacity-0 px-4 pb-10 pt-14 text-white transition-transform duration-300 after:absolute after:inset-0 after:-z-10 after:-skew-y-6 after:rounded-xl after:bg-zinc-800 after:shadow-xl after:shadow-black xxs:w-[90%] xs:px-8 sm:max-w-2xl sm:pb-12 sm:pt-20 md:px-10 md:hover:scale-105 lg:max-w-4xl lg:px-20 lg:pb-20 lg:pt-36 2xl:px-32">
      <div className="flex flex-col items-center justify-start gap-3 self-center xs:flex-row xs:self-start sm:gap-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl bg-accentBlue lg:h-16 lg:w-16">
          <Image
            alt="lesson logo"
            src={icon}
            width={125}
            height={125}
            className="h-8 w-8 lg:h-11 lg:w-11"
          />
        </div>
        <span className="text-xl xxs:text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl">
          {title}
        </span>
      </div>
      <div className="ml-2 flex flex-col items-center justify-start gap-5">
        {children}
      </div>
    </div>
  );
}

export default FeatureComponent;
