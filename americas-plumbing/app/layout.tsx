import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-newsreader",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://americasplumbing.com'),
  title: {
    default: "America's Plumbing | Plumber in San Jacinto, CA | 24/7 Service",
    template: "%s | America's Plumbing",
  },
  description:
    "America's Plumbing — licensed C-36 plumber in San Jacinto, CA serving Riverside & South Orange County. Same-day service, free estimates. Call (949) 379-0082.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
