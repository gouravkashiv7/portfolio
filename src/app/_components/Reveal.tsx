// A short fade-up as content scrolls into view, driven purely by CSS
// scroll timelines (see `.reveal` in globals.css). Content is fully visible
// without JavaScript, in browsers without scroll timelines, and for users
// who prefer reduced motion.
export default function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className ? `reveal ${className}` : "reveal"}>
      {children}
    </div>
  );
}
