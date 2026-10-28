"use client";

import { useEffect } from "react";

// biome-ignore lint/suspicious/noShadowRestrictedNames: Next.js standard signature
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Caught in error boundary:", error);
  }, [error]);

  return (
    <main
      id="main"
      className="page-x flex min-h-screen flex-col items-start justify-center"
    >
      <p className="eyebrow mb-4">Error</p>
      <h1 className="text-4xl font-semibold tracking-tight text-fg">
        Something went wrong.
      </h1>
      <p className="mt-4 max-w-[50ch] text-lg text-muted">
        An unexpected error occurred while rendering this page.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="btn btn-primary mt-8"
      >
        Try again
      </button>
    </main>
  );
}
