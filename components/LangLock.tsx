"use client";

import { useEffect } from "react";
import type { Lang } from "@/lib/copy";

// 랜딩 밖의 단일 언어 문서(개인정보처리방침 등)에서 쓴다.
// 루트 레이아웃의 판별 스크립트가 <html lang>을 방문자 언어로 바꿔 놓기 때문에,
// 그 페이지의 실제 언어로 되돌려야 스크린리더·번역기가 오해하지 않는다.
export default function LangLock({ value }: { value: Lang }) {
  useEffect(() => {
    document.documentElement.lang = value;
  }, [value]);
  return null;
}
