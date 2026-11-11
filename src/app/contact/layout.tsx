import type { Metadata } from "next";

const title = "Contact — Gourav Kashiv";
const description =
  "Contact Gourav Kashiv about full-stack engineering roles and projects.";
const url = "https://www.gouravkashiv.com/contact";

export const metadata: Metadata = {
  title,
  description:
    "Contact Gourav Kashiv about full-stack engineering roles and projects by email, LinkedIn or WhatsApp.",
  alternates: {
    canonical: url,
  },
  // openGraph and twitter replace the root layout's blocks wholesale, so the
  // shared fields (image, site name, type) have to be repeated here.
  openGraph: {
    title,
    description,
    url,
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
