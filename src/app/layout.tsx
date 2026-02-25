import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { domAnimation, LazyMotion } from "framer-motion";
import CustomCursor from "@/app/_components/CustomCursor";
import Footer from "@/app/_components/Footer";
import NoiseOverlay from "@/app/_components/NoiseOverlay";
import SmoothScrolling from "@/app/_components/SmoothScrolling";
import SplineBackgroundClient from "@/app/_components/SplineBackgroundClient";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gouravkashiv.com"),
  title: "Gourav Kashiv | Full-Stack Engineer | MERN Specialist",
  description:
    "Full-Stack Engineer specializing in MERN stack and Cloud Infrastructure. End-to-end architect owning CI/CD pipelines, Docker, and AWS EC2 deployments.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Gourav Kashiv | DevOps Developer",
    description:
      "Full-Stack Engineer specializing in MERN stack, DevOps, and Cloud Infrastructure.",
    url: "https://www.gouravkashiv.com",
    siteName: "Gourav Kashiv Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gourav Kashiv - Full-Stack Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gourav Kashiv | DevOps Developer",
    description:
      "DevOps Developer specializing in scalable cloud applications, infrastructure automation, and modern CI/CD pipelines. Currently open to new projects.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  themeColor: "#0a192f",
};

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Preloader from "@/app/_components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://unpkg.com" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased font-sans cursor-none selection:bg-accent selection:text-dark`}
      >
        <Preloader />
        <SplineBackgroundClient />
        <LazyMotion features={domAnimation} strict>
          <SmoothScrolling>
            <NoiseOverlay />
            <CustomCursor />
            {children}
            <Footer />
          </SmoothScrolling>
        </LazyMotion>
        {process.env.NODE_ENV === "production" && <Analytics />}
        {process.env.NODE_ENV === "production" && <SpeedInsights />}
      </body>
    </html>
  );
}
