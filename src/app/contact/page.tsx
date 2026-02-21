"use client";

import { AnimatePresence, m } from "framer-motion";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MagneticButton from "../_components/MagneticButton";

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Take manual control
    const mailto =
      "mailto:gouravkashiv@zohomail.in?subject=Hello%20Gourav!&body=Hi%20Gourav,%0D%0A%0D%0AI'd%20like%20to%20get%20in%20touch%20with%20you%20regarding...";

    window.location.href = mailto;

    let hasBlurred = false;
    const onBlur = () => {
      hasBlurred = true;
    };

    window.addEventListener("blur", onBlur);

    setTimeout(() => {
      window.removeEventListener("blur", onBlur);
      if (!hasBlurred) {
        setToastMessage("Email app not found. Copied to clipboard!");

        // Safer clipboard copy with fallback
        if (navigator.clipboard?.writeText) {
          navigator.clipboard
            .writeText("gouravkashiv@zohomail.in")
            .catch(() => {
              // Silently fail if clipboard write is blocked by browser permissions
            });
        } else {
          // Fallback for older browsers or insecure contexts (HTTP)
          try {
            const textArea = document.createElement("textarea");
            textArea.value = "gouravkashiv@zohomail.in";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
          } catch (err) {
            console.error("Failed to copy text: ", err);
          }
        }

        setTimeout(() => setToastMessage(null), 4000);
      }
    }, 1500); // 1.5s wait
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <m.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl mx-auto flex flex-col items-center z-10"
      >
        <m.div variants={itemVariants} className="mb-12 md:mb-16">
          <Link
            href="/"
            className="inline-flex items-center text-gray hover:text-accent transition-colors font-mono text-sm group"
          >
            <ArrowLeft
              size={16}
              className="mr-2 group-hover:-translate-x-1 transition-transform"
            />
            Back to Home
          </Link>
        </m.div>

        <m.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-light mb-6 tracking-tight">
            Let's Start a <span className="text-accent">Conversation</span>
          </h1>
          <p className="text-gray text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Choose your preferred method to get in touch. I'm always open to
            discussing new projects, creative ideas, or opportunities.
          </p>
        </m.div>

        <m.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl"
        >
          {/* WhatsApp Option */}
          <MagneticButton
            href="https://wa.me/919459899052?text=Hi%20Gourav,%20I%20want%20to%20get%20in%20touch%20regarding..."
            target="_blank"
            rel="noopener noreferrer"
            anchorClassName="block w-full h-full"
            className="w-full h-full glass-card p-10 flex flex-col items-center justify-center text-center group hover:border-accent/40 hover:bg-white/5 transition-all duration-500 cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#25D366]/10 text-[#25D366] mb-6 group-hover:scale-110 group-hover:bg-[#25D366]/20 transition-all duration-500">
              <MessageCircle size={32} />
            </div>
            <h2 className="text-2xl font-bold text-light mb-3">WhatsApp</h2>
            <p className="text-gray text-sm font-mono mb-6">
              Quickest response
            </p>
            <span className="text-accent text-sm font-mono flex items-center opacity-70 group-hover:opacity-100 transition-opacity">
              Message me{" "}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>
          </MagneticButton>

          {/* Email Option */}
          <MagneticButton
            href="mailto:gouravkashiv@zohomail.in"
            onClick={handleEmailClick}
            anchorClassName="block w-full h-full"
            className="w-full h-full glass-card p-10 flex flex-col items-center justify-center text-center group hover:border-accent/40 hover:bg-white/5 transition-all duration-500 cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-accent/10 text-accent mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500">
              <Mail size={32} />
            </div>
            <h2 className="text-2xl font-bold text-light mb-3">Email</h2>
            <p className="text-gray text-sm font-mono mb-6">
              Detailed inquiries
            </p>
            <span className="text-accent text-sm font-mono flex items-center opacity-70 group-hover:opacity-100 transition-opacity">
              Send an email{" "}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>
          </MagneticButton>
        </m.div>

        {/* Toast Notification */}
        <AnimatePresence>
          {toastMessage && (
            <m.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="fixed top-10 right-6 md:top-10 md:right-10 bg-accent text-dark px-6 py-3 rounded-full font-mono text-sm shadow-[0_0_20px_rgba(100,255,218,0.3)] z-50 flex items-center"
            >
              {toastMessage}
            </m.div>
          )}
        </AnimatePresence>
      </m.div>
    </main>
  );
}
