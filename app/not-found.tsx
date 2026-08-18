import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found — WhyNotMe",
};

export default function NotFound() {
  return (
    <main className="mx-auto max-w-[720px] px-5 py-24">
      <h1 className="text-3xl font-bold text-slate-900">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-6 text-lg text-slate-600">없는 페이지예요.</p>
      <p className="mt-10 text-lg">
        <Link href="/" className="underline">
          WhyNotMe →
        </Link>
      </p>
    </main>
  );
}
