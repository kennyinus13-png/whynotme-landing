"use client";

export default function PricingCta({
  label,
  lang,
}: {
  label: string;
  lang: "ko" | "en";
}) {
  const onClick = () => {
    (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.(
      "event",
      "pricing_cta_click",
      { page_language: lang }
    );
    document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={onClick}
      className="mt-8 rounded-xl bg-slate-900 px-8 py-4 text-lg font-bold text-white transition hover:bg-slate-700"
    >
      {label}
    </button>
  );
}
