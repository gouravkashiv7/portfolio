import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/app/_components/CustomCursor";
import Footer from "@/app/_components/Footer";
import NoiseOverlay from "@/app/_components/NoiseOverlay";
import SmoothScrolling from "@/app/_components/SmoothScrolling";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        url: "/resume.pdf", // Ideally this should be a proper OG image
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
    images: ["/resume.pdf"], // Ideally this should be a proper Twitter card image
  },
};

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans cursor-none selection:bg-accent selection:text-dark`}
      >
        <SmoothScrolling>
          <NoiseOverlay />
          <CustomCursor />
          {children}
          <Footer />
        </SmoothScrolling>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
