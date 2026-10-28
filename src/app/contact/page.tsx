import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Contact from "../_components/Contact";
import Footer from "../_components/Footer";

export default function ContactPage() {
  return (
    <>
      <main id="main" className="pt-10">
        <div className="page-x">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to portfolio
          </Link>
        </div>
        <Contact as="h1" />
      </main>
      <Footer />
    </>
  );
}
