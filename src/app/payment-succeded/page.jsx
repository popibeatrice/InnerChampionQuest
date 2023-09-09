import Image from "next/image";
import emailImage from "../../../public/icons8-send-100(1).png";

export default function SuccessPage() {
  return (
    <main class="flex min-h-screen w-full flex-col items-center justify-center gap-12 py-10">
      <h1 className="font-heydex text-3xl xxs:text-4xl xs:text-5xl sm:text-6xl md:text-7xl">
        CONGRATULATIONS
      </h1>
      <div className="flex w-[80%] max-w-2xl flex-col gap-14 bg-zinc-800 p-10">
        <div class="success-animation">
          <svg
            class="checkmark sm:h-[100px] sm:w-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              class="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              class="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center gap-12 md:gap-7 ">
          <h2 className="text-center text-3xl xs:text-4xl">
            We are glad you chose the right path!
          </h2>
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-5">
            <Image
              className="h-12 w-12"
              src={emailImage}
              alt="email was sent"
              width={125}
              height={125}
            />
            <p className="text-center font-popuca">
              An email containing your course has been send to you!{" "}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
