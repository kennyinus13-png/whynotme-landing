import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "../globals.css";
import { GtagInit, Analytics } from "@/components/Analytics";
import { SITE_URL } from "@/lib/config";

// 한국어 쪽과 같은 세리프를 쓴다(브랜드 통일). latin subset만 로드하므로 영문에도 문제없음
const serif = Noto_Serif_KR({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "WhyNotMe — Visa screening or your resume?";
const DESCRIPTION =
  "We read an F-1 student's application history to estimate why the rejection happened — visa screening or resume mismatch — and what to check next.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/en",
    languages: { ko: "/", en: "/en" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "en_US",
  },
};

export default function EnRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
