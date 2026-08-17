// 언어별 설정 한 곳에 모아둠 — 폼을 새로 만들면 여기 ID만 바꾸면 된다
export const GA4_ID = "G-XKF7BH85Z6";
export const CLARITY_ID = "xzpono8cgx";

export const SITE_URL = "https://whynotme-landing.vercel.app";
export const CONTACT_EMAIL = "kennyinus13@gmail.com";

// 한국어 폼(운영 중). 이메일 필수 + 선택질문 + 장문 자유입력 + 체험단 체크박스
export const TALLY_FORM_ID_KO = "GxVZ9o";

// 영어(/en)는 Tally 폼을 쓰지 않는다 — 선택지 질문 없이 사례를 붙여넣고
// 바로 메일을 띄우는 components/EmailCase.tsx 를 쓴다(사용자 지시, 2026-08-18).
