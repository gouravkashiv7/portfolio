import Reveal from "./Reveal";

export default function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-16 max-w-2xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2
        id={`${id}-title`}
        className="text-3xl md:text-4xl font-semibold tracking-tight text-fg"
      >
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
