import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Gourav Kashiv",
  description:
    "Get in touch with Gourav Kashiv. Available for full-stack engineering, DevOps consulting, and open to new career opportunities. Contact via Email or WhatsApp.",
  alternates: {
    canonical: "https://www.gouravkashiv.com/contact",
  },
  openGraph: {
    title: "Contact | Gourav Kashiv",
    description:
      "Get in touch for new projects, creative ideas or tech opportunities.",
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
