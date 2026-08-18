"use client";

import type { Lang } from "@/lib/copy";

export default function PricingCta({
  label,
  lang,
  targetId,
}: {
  label: string;
  lang: Lang;
  /** 한 문서에 두 언어 폼이 같이 있으므로 스크롤 대상을 언어별로 받는다 */
  targetId: string;
}) {
  const onClick = () => {
    (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.(
      "event",
      "pricing_cta_click",
      { page_language: lang }
    );
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
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
