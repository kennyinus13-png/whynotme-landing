"use client";

import { useEffect } from "react";
import { COPY } from "@/lib/copy";
import { currentLang } from "@/lib/lang";

// 탭 제목은 마크업이 아니라 문서 속성이라 CSS로 못 바꾼다.
// 하이드레이션이 끝난 뒤 한 번 맞춰 주고, 이후엔 setLang이 갱신한다.
export default function LangTitle() {
  useEffect(() => {
    document.title = COPY[currentLang()].title;
  }, []);
  return null;
}
