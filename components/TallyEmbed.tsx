"use client";

import { useEffect } from "react";
import Script from "next/script";

const TALLY_FORM_ID = "GxVZ9o";

const EMBED_URL = `https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

// 폼이 Hero·FinalCTA 두 곳에 임베드되므로 제출 리스너는 한 번만 등록한다
let listenerAttached = false;

export default function TallyEmbed({ id }: { id?: string }) {
  useEffect(() => {
    if (listenerAttached) return;
    listenerAttached = true;
    const handler = (e: MessageEvent) => {
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        if (data?.event === "Tally.FormSubmitted") {
          (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.(
            "event",
            "preorder_submit"
          );
        }
      } catch {}
    };
    window.addEventListener("message", handler);
  }, []);

  return (
    <div id={id} className="relative w-full overflow-hidden rounded-xl bg-white p-2 shadow-sm ring-1 ring-slate-200">
      {/* src 없이 data-tally-src만 두면 embed.js가 로드·동적 높이를 관리해
          폼 끝(제출 버튼 줄)이 항상 iframe 하단에 오고, 그 줄 오른쪽의
          Tally 무료 플랜 배지를 아래 흰색 패치가 가린다 */}
      <iframe
        data-tally-src={EMBED_URL}
        loading="lazy"
        width="100%"
        height={620}
        frameBorder={0}
        title="얼리버드 사전예약 폼"
      />
      {/* 제출 버튼은 모든 폭에서 왼쪽 고정(끝 x≈206px)이라 left-56부터 덮으면 버튼은 안 가림 */}
      <div aria-hidden className="absolute bottom-2 left-56 right-2 h-14 bg-white" />
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
    </div>
  );
}
