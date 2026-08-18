// 언어별 설정 한 곳에 모아둠 — 폼을 새로 만들면 여기 ID만 바꾸면 된다
export const GA4_ID = "G-XKF7BH85Z6";
export const CLARITY_ID = "xzpono8cgx";

export const SITE_URL = "https://whynotme-landing.vercel.app";
export const CONTACT_EMAIL = "kennyinus13@gmail.com";

// Tally 폼은 두 언어 모두 랜딩에서 쓰지 않는다(사용자 지시, 2026-08-18) —
// 선택지("비자 정보 부족 / 레주메 피드백 없음 / 이메일 문의")를 고르는 단계 없이
// 이메일 칸과 내용 칸만 있는 components/EmailCase.tsx 로 바로 메일을 띄운다.
// 폼 자체는 살아 있으므로(tally.so/r/GxVZ9o) 되돌릴 때를 위해 ID만 남겨 둔다.
export const TALLY_FORM_ID_KO = "GxVZ9o";
