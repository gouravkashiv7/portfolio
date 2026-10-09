import { Github, Linkedin, X } from "lucide-react";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="hidden 2xl:flex fixed left-8 bottom-0 flex-col items-center gap-6 z-40">
      <Link
        href="https://github.com/gouravkashiv7"
        target="_blank"
        className="text-gray hover:text-accent transition-colors duration-300"
        aria-label="GitHub Profile"
      >
        <Github size={20} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/gouravkashiv7/"
        target="_blank"
        className="text-gray hover:text-accent transition-colors duration-300"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={20} />
      </Link>
      <Link
        href="https://x.com/KashivGourav"
        target="_blank"
        className="text-gray hover:text-accent transition-colors duration-300"
        aria-label="X (Twitter) Profile"
      >
        <X size={20} />
      </Link>
      <div className="w-px h-24 bg-gray mt-4"></div>
    </div>
  );
}
