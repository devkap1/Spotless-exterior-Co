import type { Metadata } from "next";
import { Bebas_Neue, Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700", "800"],
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600"],
  variable: "--font-barlow",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spotless Exterior Co. | Professional Power Washing & Window Cleaning | Westchester, NY",
  description:
    "5-star rated exterior cleaning in Westchester, NY. Professional power washing, window cleaning, and gutter cleaning. Serving Armonk, Bedford, Greenwich & surrounding areas.",
  keywords: "pressure washing, power washing, window cleaning, gutter cleaning, Westchester NY, Armonk, Bedford, Greenwich",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlowCondensed.variable} ${barlow.variable}`}
    >
      <body className="antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
