import { links } from "@/app/_data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="page-x flex flex-col gap-4 py-8 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Gourav Kashiv</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg"
            >
              X
            </a>
          </li>
          <li>
            <a
              href={links.resume}
              target="_blank"
              rel="noopener"
              className="hover:text-fg"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="#home" className="hover:text-fg">
              Back to top ↑
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
