"use client";

export default function PricingCta() {
  const onClick = () => {
    (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.(
      "event",
      "pricing_cta_click"
    );
    document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={onClick}
      className="mt-6 w-full rounded-lg bg-navy px-6 py-3.5 text-base font-bold text-white transition hover:opacity-90"
    >
      얼리버드 $4.9에 사전예약
    </button>
  );
}
