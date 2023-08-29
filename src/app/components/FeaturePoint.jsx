import Image from "next/image";

import checkIcon from "../../../public/icons8-checkmark.svg";

function FeaturePoint({ text }) {
  return (
    <div className="flex w-full items-center justify-start gap-3">
      <Image alt="check" src={checkIcon} width={32} height={32} />
      <span className="font-popuca xs:text-lg 2xl:text-xl">{text}</span>
    </div>
  );
}

export default FeaturePoint;
