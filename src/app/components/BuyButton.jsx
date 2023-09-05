import Link from "next/link";

function BuyButton({ children }) {
  return (
    <Link
      href={"/"}
      type="button"
      className="cta bg-accentBlue text-xl xs:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl"
    >
      <span>{children}</span>
    </Link>
  );
}

export default BuyButton;
