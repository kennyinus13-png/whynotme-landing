"use client";

export default function BetaCta() {
  const onClick = () => {
    (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.(
      "event",
      "beta_cta_click"
    );
    document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={onClick}
      className="mt-6 w-full rounded-lg bg-navy px-6 py-3.5 text-base font-bold text-white transition hover:opacity-90"
    >
      체험단 신청하기
    </button>
  );
}
