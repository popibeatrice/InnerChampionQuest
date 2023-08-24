import Image from "next/image";
import logoText from "../../../public/logo-white-text.png";
function Header() {
  return (
    <header className="p-2 md:p-4 xl:p-6">
      <Image
        alt="Inner Champion Quest Logo"
        width={256}
        height={256}
        src={logoText}
        priority={true}
        className="w-16 xs:w-20 sm:w-24 xl:w-28"
      ></Image>
    </header>
  );
}

export default Header;
