import "./globals.css";
import { Bebas_Neue, Poppins } from "next/font/google";
import localFont from "next/font/local";

const Bebito = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebito",
  display: "swap",
});

const Popica = Poppins({
  subsets: ["latin"],
  weight: ["200", "400"],
  variable: "--font-popica",
  display: "swap",
});

const myFont = localFont({
  src: "../Heydex.woff2",
  display: "swap",
  variable: "--font-heydex",
});

export const metadata = {
  title: "Home | Inner Champion Quest",
  description: "Escape the matrix, change your life now!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${Bebito.variable} ${Popica.variable} ${myFont.variable}`}
    >
      <body className="min-h-screen bg-zinc-900 font-bebito text-white">
        {children}
      </body>
    </html>
  );
}
