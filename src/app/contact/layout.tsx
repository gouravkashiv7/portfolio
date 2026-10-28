import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Gourav Kashiv",
  description:
    "Contact Gourav Kashiv about full-stack engineering roles and projects by email, LinkedIn or WhatsApp.",
  alternates: {
    canonical: "https://www.gouravkashiv.com/contact",
  },
  openGraph: {
    title: "Contact — Gourav Kashiv",
    description:
      "Contact Gourav Kashiv about full-stack engineering roles and projects.",
    url: "https://www.gouravkashiv.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
