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
    <div id={id} className="w-full rounded-xl bg-white p-2 shadow-sm ring-1 ring-slate-200">
      <iframe
        data-tally-src={EMBED_URL}
        src={EMBED_URL}
        loading="lazy"
        width="100%"
        height={620}
        frameBorder={0}
        title="얼리버드 사전예약 폼"
      />
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
    </div>
  );
}
