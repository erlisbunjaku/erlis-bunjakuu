import { Outfit, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Erlis Bunjaku — Data & AI Associate, Engineering",
  description:
    "Erlis Bunjaku — Data & AI Associate, Engineering at Agilyti.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${syne.variable} ${geistMono.variable} ${outfit.className} antialiased bg-ink text-cream overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
