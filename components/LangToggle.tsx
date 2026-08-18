"use client";

import { COPY, type Lang } from "@/lib/copy";
import { setLang } from "@/lib/lang";

// 토글은 언어 블록 안에 하나씩 들어간다. 보이는 블록이 곧 현재 언어라
// 활성 표시를 따로 계산할 필요가 없다.
export default function LangToggle({ current }: { current: Lang }) {
  const other: Lang = current === "ko" ? "en" : "ko";

  const cls = (l: Lang) =>
    l === current
      ? "font-bold text-slate-900"
      : "text-slate-400 underline transition hover:text-slate-900";

  return (
    // 좁은 화면에서 로고와 한 줄에 들어가야 해서 모바일은 한 단계 작게 쓴다
    <div className="flex shrink-0 items-center gap-1.5 text-sm md:gap-2 md:text-base">
      {(["ko", "en"] as Lang[]).map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i === 1 && (
            <span aria-hidden className="text-slate-300">
              |
            </span>
          )}
          {l === current ? (
            <span className={cls(l)} aria-current="true">
              {l === "ko" ? "한국어" : "English"}
            </span>
          ) : (
            <button
              type="button"
              onClick={() => setLang(other, COPY[other].title)}
              className={cls(l)}
            >
              {l === "ko" ? "한국어" : "English"}
            </button>
          )}
        </span>
      ))}
    </div>
  );
}
