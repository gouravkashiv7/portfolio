import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { links } from "@/app/_data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Gourav Kashiv — Full-Stack Engineer";
const description =
  "Gourav Kashiv builds and ships full-stack products: React and Next.js interfaces, Node.js APIs, databases, and production deployments on AWS and Vercel.";

export const metadata: Metadata = {
  metadataBase: new URL(links.site),
  title,
  description,
  keywords: [
    "Gourav Kashiv",
    "Full-Stack Engineer",
    "Software Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "AWS",
    "ERP",
    "Supabase",
  ],
  alternates: {
    canonical: links.site,
  },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title,
    description,
    url: links.site,
    siteName: "Gourav Kashiv",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gourav Kashiv — I build and ship full-stack products.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gourav Kashiv",
  jobTitle: "Software Developer",
  url: links.site,
  email: `mailto:${links.email}`,
  worksFor: {
    "@type": "Organization",
    name: "Technoledge",
  },
  alumnusOf: [
    { "@type": "CollegeOrUniversity", name: "Panjab University, Chandigarh" },
    { "@type": "CollegeOrUniversity", name: "Chitkara University" },
  ],
  sameAs: [links.github, links.linkedin, links.x],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "AWS",
    "Generative AI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Standard way for JSON-LD in Next.js
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        {children}
        {process.env.NODE_ENV === "production" &&
          Boolean(process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.VERCEL) && (
            <>
              <Analytics />
              <SpeedInsights />
            </>
          )}
      </body>
    </html>
  );
}
