import { Nunito_Sans, Poppins } from "next/font/google";

export const Nunito_Sans_init = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito_sans",
  weight: "300",
});

export const Poppins_init = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "600"],
});

export const nunito_sans = Nunito_Sans_init.variable;
export const poppins = Poppins_init.variable;
