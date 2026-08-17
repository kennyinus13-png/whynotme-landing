import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "../globals.css";
import { GtagInit, Analytics } from "@/components/Analytics";
import { SITE_URL } from "@/lib/config";

// 설계서 5장 원칙(런타임 외부 요청 금지) — next/font가 빌드 시 폰트를 로컬 포함
const serif = Noto_Serif_KR({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "WhyNotMe — 탈락 원인, 비자인지 레주메인지";
const DESCRIPTION =
  "F-1 유학생의 지원 기록을 분석해 탈락 원인을 추정하고, 원인별로 지금 확인할 것을 알려드립니다";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
    languages: { ko: "/", en: "/en" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ko_KR",
  },
};

export default function KoRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <GtagInit />
      </head>
      <body className={`${serif.className} bg-white text-slate-800 antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
