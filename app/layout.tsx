import type React from "react";
import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/header";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: {
    default:
      "IREEDS – Institute of Research in Economics, Environment and Data Science",
    template: "%s | IREEDS",
  },
  description:
    "IREEDS is a multi-disciplinary research institute founded by leading Vietnamese scientists, promoting sustainable development of Vietnam through research, training and practices in economics, environment and data science.",
  keywords: [
    "IREEDS",
    "Institute of Research in Economics Environment and Data Science",
    "Vietnam research institute",
    "sustainable development Vietnam",
    "economics environment data science",
    "climate change research Vietnam",
    "VCREME",
  ],
  authors: [{ name: "IREEDS", url: "https://ireeds.org" }],
  creator: "IREEDS",
  metadataBase: new URL("https://ireeds.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ireeds.org",
    siteName: "IREEDS",
    title:
      "IREEDS – Institute of Research in Economics, Environment and Data Science",
    description:
      "Multi-disciplinary research institute promoting sustainable development of Vietnam through scientific research, training, and policy evidence.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "IREEDS – Institute of Research in Economics, Environment and Data Science",
    description:
      "Multi-disciplinary research institute promoting sustainable development of Vietnam through scientific research, training, and policy evidence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased pt-10`}
      >
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
