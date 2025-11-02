"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent py-6 border-t border-gray/20 mt-16">
      <div className="container mx-auto px-6 text-center">
        <p className="text-white font-mono text-sm">
          Designed & built by{" "}
          <a
            href="https://github.com/gouravkashiv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent font-bold transition-colors duration-300"
          >
            Gourav Kashiv
          </a>{" "}
          • © {currentYear}
        </p>
      </div>
    </footer>
  );
}
