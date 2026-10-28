"use client";

import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface Shot {
  src: string;
  alt: string;
}

export default function Gallery({
  title,
  domain,
  images,
  priority = false,
}: {
  title: string;
  domain?: string;
  images: Shot[];
  priority?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const count = images.length;
  const current = images[index];

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + count) % count),
    [count],
  );

  const openLightbox = () => dialogRef.current?.showModal();
  const closeLightbox = () => dialogRef.current?.close();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onKey = (e: KeyboardEvent) => {
      if (!dialog.open) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-line-strong bg-surface shadow-[0_30px_70px_-40px_rgb(0_0_0/0.8)]">
        <div className="flex items-center gap-3 border-b border-line px-3.5 py-2.5">
          <span aria-hidden="true" className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          </span>
          {domain && (
            <span className="truncate rounded-md bg-bg/60 px-2.5 py-0.5 font-mono text-[0.7rem] text-subtle">
              {domain}
            </span>
          )}
          <span className="ml-auto font-mono text-[0.7rem] text-subtle">
            {index + 1}/{count}
          </span>
        </div>

        <button
          type="button"
          onClick={openLightbox}
          className="group relative block aspect-[16/10] w-full overflow-hidden bg-bg"
          aria-label={`Enlarge screenshot: ${current.alt}`}
        >
          <Image
            key={current.src}
            src={current.src}
            alt={`${title} — ${current.alt}`}
            fill
            sizes="(max-width: 1024px) 100vw, 640px"
            priority={priority}
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015]"
          />
          <span className="absolute right-3 bottom-3 grid h-8 w-8 place-items-center rounded-md border border-line-strong bg-bg/80 text-muted opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            <Maximize2 size={14} aria-hidden="true" />
          </span>
        </button>
      </div>

      {count > 1 && (
        <ul
          aria-label={`${title} screenshots`}
          className="mt-3 flex gap-2 overflow-x-auto pb-1"
        >
          {images.map((img, i) => (
            <li key={img.src} className="shrink-0">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show screenshot: ${img.alt}`}
                aria-pressed={i === index}
                className={`relative block h-11 w-[4.5rem] overflow-hidden rounded-md border transition ${
                  i === index
                    ? "border-accent"
                    : "border-line opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes="72px"
                  className="object-cover object-top"
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      <dialog
        ref={dialogRef}
        aria-label={`${title} screenshots`}
        className="m-auto h-[min(90vh,900px)] w-[min(94vw,1400px)] max-w-none max-h-none rounded-xl border border-line-strong bg-bg p-0 text-fg backdrop:bg-black/75 backdrop:backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeLightbox();
        }}
        onKeyDown={() => {}}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
            <p className="truncate text-sm">
              <span className="font-medium">{title}</span>
              <span className="text-subtle"> — {current.alt}</span>
            </p>
            <button
              type="button"
              onClick={closeLightbox}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line-strong hover:border-accent"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
          <div className="relative flex-1">
            <Image
              src={current.src}
              alt={`${title} — ${current.alt}`}
              fill
              sizes="94vw"
              className="object-contain p-3"
            />
            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-line-strong bg-bg/85 hover:border-accent"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-line-strong bg-bg/85 hover:border-accent"
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>
        </div>
      </dialog>
    </div>
  );
}
