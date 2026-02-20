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
  title: "Gourav Kashiv | DevOps Developer",
  description:
    "DevOps Developer specializing in scalable cloud applications, infrastructure automation, and modern CI/CD pipelines. Currently open to new projects.",
  icons: {
    icon: "/favicon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans cursor-none selection:bg-accent selection:text-dark`}
      >
        <SmoothScrolling>
          <NoiseOverlay />
          <CustomCursor />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
