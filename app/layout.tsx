import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import { GtagInit, Analytics } from "@/components/Analytics";
import { SITE_URL } from "@/lib/config";
import { LANG_SCRIPT } from "@/lib/lang";

// 설계서 5장 원칙(런타임 외부 요청 금지) — next/font가 빌드 시 폰트를 로컬 포함
const serif = Noto_Serif_KR({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

// 한 주소가 두 언어를 다 담으므로 제목·설명도 두 언어를 같이 적는다.
// 레딧·X 공유 카드에서 먼저 읽히도록 영어를 앞에 둔다.
const TITLE = "WhyNotMe — Visa screening or your resume? / 비자인지 레주메인지";
const DESCRIPTION =
  "We read an F-1 student's application history to estimate why the rejection happened — visa screening or resume mismatch. F-1 유학생의 지원 기록을 분석해 탈락 원인을 추정하고, 지금 확인할 것을 알려드립니다.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "en_US",
    alternateLocale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // 아래 스크립트가 하이드레이션 전에 lang·data-lang을 바꾸므로 경고를 끈다
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: LANG_SCRIPT }} />
        <GtagInit />
      </head>
      <body className={`${serif.className} bg-white text-slate-800 antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
