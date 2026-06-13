import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ChatBot from "@/app/components/ChatBot";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: "America's Plumbing",
    title: "America's Plumbing | Plumber in San Jacinto, CA | 24/7 Service",
    description:
      "Licensed C-36 plumber in San Jacinto, CA. Serving Riverside County & South Orange County. Same-day service, free estimates.",
    images: [
      {
        url: '/plumb.jpg',
        width: 1200,
        height: 630,
        alt: "America's Plumbing — San Jacinto, CA",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "America's Plumbing | Plumber in San Jacinto, CA | 24/7 Service",
    description:
      "Licensed C-36 plumber in San Jacinto, CA. Serving Riverside County & South Orange County. Same-day service, free estimates.",
    images: ['/plumb.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${jakarta.variable}`}>
      <body className="antialiased overflow-x-hidden">
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
