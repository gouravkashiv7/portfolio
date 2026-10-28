import { Cloud, Database, Layout, Server } from "lucide-react";

// A quiet illustration of the layers I own end to end. Each layer lists
// tools actually used in the projects below.
const layers = [
  {
    icon: Layout,
    name: "Interface",
    tools: "React · Next.js · Tailwind",
  },
  {
    icon: Server,
    name: "API & integrations",
    tools: "Node.js · Express · Edge Functions",
  },
  {
    icon: Database,
    name: "Data",
    tools: "MongoDB · PostgreSQL · Supabase",
  },
  {
    icon: Cloud,
    name: "Deployment",
    tools: "AWS EC2 · S3 · Nginx · Vercel",
  },
];

export default function SystemDiagram() {
  return (
    <figure
      aria-label="The layers of a product I work across: interface, API, data and deployment"
      className="hidden md:block relative rounded-2xl border border-line bg-surface/70 p-5 shadow-[0_24px_60px_-30px_rgb(0_0_0/0.6)] backdrop-blur-sm"
    >
      <div className="mb-4 flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.08em] text-subtle">
        <span>request path</span>
        <span className="flex items-center gap-1.5 text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          in production
        </span>
      </div>

      <ol className="relative">
        <svg
          aria-hidden="true"
          className="absolute left-[1.15rem] top-8 bottom-8 h-[calc(100%-4rem)] w-px overflow-visible"
          width="1"
        >
          <line
            x1="0.5"
            y1="0"
            x2="0.5"
            y2="100%"
            stroke="rgb(114 200 240 / 0.45)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
        </svg>
        {layers.map(({ icon: Icon, name, tools }) => (
          <li key={name} className="relative flex items-center gap-4 py-2.5">
            <span className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line-strong bg-elevated text-accent">
              <Icon size={16} aria-hidden="true" />
            </span>
            <span className="flex-1 rounded-lg border border-line bg-bg/40 px-3.5 py-2.5">
              <span className="block text-sm font-medium text-fg">{name}</span>
              <span className="mt-0.5 block font-mono text-[0.72rem] text-subtle">
                {tools}
              </span>
            </span>
          </li>
        ))}
      </ol>

      <figcaption className="mt-4 border-t border-line pt-3 font-mono text-[0.72rem] text-subtle">
        One developer, every layer: design → build → deploy → operate
      </figcaption>
    </figure>
  );
}
