"use client";

import { useEffect } from "react";
import Script from "next/script";
import { CONTACT_EMAIL } from "@/lib/config";

// 폼이 여러 곳에 임베드될 수 있으므로 제출 리스너는 한 번만 등록한다
let listenerAttached = false;

type Props = {
  id?: string;
  /** Tally 폼 ID. 빈 문자열이면 폼 대신 메일 CTA를 보여준다 */
  formId: string;
  /** GA4에서 언어별로 갈라 보기 위한 값 */
  lang: "ko" | "en";
  title: string;
  /** Tally 무료 배지를 덮는 흰 패치의 시작 위치(제출 버튼 오른쪽 끝).
   *  버튼 라벨 길이에 따라 달라지므로 언어별로 조정한다 */
  patchLeftClass?: string;
  /** 폼이 없을 때 보여줄 문구 */
  fallback?: { line: string; cta: string };
};

export default function TallyEmbed({
  id,
  formId,
  lang,
  title,
  patchLeftClass = "left-52",
  fallback,
}: Props) {
  useEffect(() => {
    if (listenerAttached) return;
    listenerAttached = true;
    const handler = (e: MessageEvent) => {
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        if (data?.event === "Tally.FormSubmitted") {
          (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.(
            "event",
            "preorder_submit",
            { page_language: lang }
          );
        }
      } catch {}
    };
    window.addEventListener("message", handler);
  }, [lang]);

  // 폼 ID가 아직 없는 언어는 빈 iframe을 띄우지 않고 메일로 받는다
  if (!formId) {
    return (
      <div id={id}>
        <p className="text-xl leading-relaxed text-slate-700 md:text-2xl">
          {fallback?.line}
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=WhyNotMe%20free%20analysis`}
          className="mt-8 inline-block rounded-xl bg-slate-900 px-8 py-4 text-lg font-bold text-white transition hover:bg-slate-700"
        >
          {fallback?.cta}
        </a>
      </div>
    );
  }

  const embedUrl = `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

  return (
    <div id={id} className="relative w-full overflow-hidden">
      {/* src 없이 data-tally-src만 두면 embed.js가 로드·동적 높이를 관리해
          폼 끝(제출 버튼 줄)이 항상 iframe 하단에 오고, 그 줄 오른쪽의
          Tally 무료 플랜 배지를 아래 흰색 패치가 가린다 */}
      <iframe
        data-tally-src={embedUrl}
        loading="lazy"
        width="100%"
        height={620}
        frameBorder={0}
        title={title}
      />
      <div
        aria-hidden
        className={`absolute bottom-0 ${patchLeftClass} right-0 h-14 bg-white`}
      />
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
    </div>
  );
}
