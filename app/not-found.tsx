import type { Metadata } from "next";
import Link from "next/link";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/config";

// 루트 레이아웃이 (ko)·(en) 두 개로 갈려 있어서 이 404는 어느 쪽에도 속하지 않는다.
// 그래서 html·body를 직접 들고 있어야 한다(Next 멀티 루트 레이아웃 규칙).
const serif = Noto_Serif_KR({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Page not found — WhyNotMe",
};

export default function NotFound() {
  return (
    <html lang="en">
      <body className={`${serif.className} bg-white text-slate-800 antialiased`}>
        <main className="mx-auto max-w-[720px] px-5 py-24">
          <h1 className="text-3xl font-bold text-slate-900">
            This page doesn&apos;t exist.
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            없는 페이지예요.
          </p>
          <div className="mt-10 flex gap-6 text-lg">
            <Link href="/" className="underline">
              한국어
            </Link>
            <Link href="/en" className="underline">
              English
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
