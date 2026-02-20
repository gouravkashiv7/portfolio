import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="fixed left-8 bottom-0 flex flex-col items-center gap-6">
      <Link
        href="https://github.com/gouravkashiv7"
        target="_blank"
        className="text-gray hover:text-accent transition-colors duration-300"
        aria-label="GitHub Profile"
      >
        <Github size={20} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/gourav-kashiv-7203572b2/"
        target="_blank"
        className="text-gray hover:text-accent transition-colors duration-300"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={20} />
      </Link>
      <Link
        href="https://www.instagram.com/_viva_la_vida_______/"
        target="_blank"
        className="text-gray hover:text-accent transition-colors duration-300"
        aria-label="Instagram Profile"
      >
        <Instagram size={20} />
      </Link>
      <div className="w-px h-24 bg-gray mt-4"></div>
    </div>
  );
}
