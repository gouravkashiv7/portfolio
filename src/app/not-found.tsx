import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      className="page-x flex min-h-screen flex-col items-start justify-center"
    >
      <p className="eyebrow mb-4">404</p>
      <h1 className="text-4xl font-semibold tracking-tight text-fg">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-[50ch] text-lg text-muted">
        The link may be out of date. The portfolio itself is one click away.
      </p>
      <Link href="/" className="btn btn-primary mt-8">
        Back to the portfolio
      </Link>
    </main>
  );
}
