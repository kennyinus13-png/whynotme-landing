import type { Lang } from "./copy";

export const LANG_KEY = "wnm_lang";

/** <head>에서 동기로 실행되는 언어 판별 스크립트.
 *  본문이 그려지기 전에 <html data-lang>을 정해야 다른 언어가 한 번 스쳐 보이지 않는다.
 *  우선순위: ?lang= → 지난 선택(localStorage) → 브라우저 언어. 한국어가 아니면 영어로 본다
 *  (홍보 채널이 레딧·X 영어권이라, 모르는 방문자는 영어가 맞을 확률이 높다).
 *  JS가 꺼져 있으면 data-lang이 없고, 그때는 CSS 기본값대로 한국어가 보인다. */
export const LANG_SCRIPT = `(function(){try{
var q=new URLSearchParams(location.search).get("lang");
var s=(q==="ko"||q==="en")?q:null;
var l=s||localStorage.getItem("${LANG_KEY}");
if(l!=="ko"&&l!=="en"){l=/^ko\b/i.test(navigator.language||"")?"ko":"en";}
if(s){localStorage.setItem("${LANG_KEY}",l);}
var e=document.documentElement;e.dataset.lang=l;e.lang=l;
}catch(_){}})();`;

export function currentLang(): Lang {
  return document.documentElement.dataset.lang === "en" ? "en" : "ko";
}

/** 언어를 바꾼다. 문구 교체는 CSS가 하므로 리렌더가 없다 —
 *  여기서는 문서 속성·저장·GA4 이벤트만 챙긴다.
 *  탭 제목은 건드리지 않는다: React 19가 metadata의 <title>을 소유해서
 *  프로덕션 빌드에서는 커밋 때 되돌려 놓는다(dev 와 동작이 갈렸다).
 *  주소가 하나뿐이라 제목도 두 언어를 같이 적은 한 벌로 둔다. */
export function setLang(lang: Lang) {
  const el = document.documentElement;
  el.dataset.lang = lang;
  el.lang = lang;
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {}
  (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.(
    "event",
    "lang_switch",
    { page_language: lang }
  );
}
