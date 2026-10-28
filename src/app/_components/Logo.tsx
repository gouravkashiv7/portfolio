// GK monogram: an open G and a K drawn as single strokes, so it stays crisp
// from favicon size up. The same paths are used in src/app/icon.svg.
export const LOGO_PATHS = {
  g: "M29.5 24.5A11 11 0 1 0 33 32H25",
  k: "M40 21V43M51 21L41.5 32L51 43",
};

export default function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <rect
        x="1"
        y="1"
        width="62"
        height="62"
        rx="15"
        fill="var(--surface)"
        stroke="var(--line-strong)"
        strokeWidth="2"
      />
      <g
        fill="none"
        stroke="var(--accent)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={LOGO_PATHS.g} />
        <path d={LOGO_PATHS.k} />
      </g>
    </svg>
  );
}
