import type { Metadata } from "next";
import Script from "next/script";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";

// 설계서 5장 원칙(런타임 외부 요청 금지) — next/font가 빌드 시 폰트를 로컬 포함
const serif = Noto_Serif_KR({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const DESCRIPTION =
  "F-1 유학생의 지원 기록을 분석해 탈락 원인을 추정하고, 원인별로 지금 확인할 것을 알려드립니다";

const GA4_ID = "G-XKF7BH85Z6";
const CLARITY_ID = "xzpono8cgx";

export const metadata: Metadata = {
  metadataBase: new URL("https://whynotme-landing.vercel.app"),
  title: "WhyNotMe — 탈락 원인, 비자인지 레주메인지",
  description: DESCRIPTION,
  openGraph: {
    title: "WhyNotMe — 탈락 원인, 비자인지 레주메인지",
    description: DESCRIPTION,
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA4_ID}');`,
          }}
        />
      </head>
      <body className={`${serif.className} bg-white text-slate-800 antialiased`}>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="ms-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_ID}");`,
          }}
        />
      </body>
    </html>
  );
}
