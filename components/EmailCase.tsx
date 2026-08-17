"use client";

import { useRef, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/config";

// /en 은 선택지 폼(Tally) 대신 바로 메일을 띄우는 입력창을 쓴다.
// 백엔드가 없으므로 mailto로 본문을 채워 사용자의 메일 앱을 여는 방식이다.
// 메일 앱이 없는 환경(웹메일만 쓰는 경우 등)에서도 막히지 않게 복사 버튼을 함께 둔다.

const PLACEHOLDER = `Company: Stripe
Role: Software Engineer Intern
Applied: Aug 3, 2:40 PM
Rejected: Aug 3, 6:21 PM
Anything else: the application asked if I need sponsorship`;

export default function EmailCase({ id }: { id?: string }) {
  const [body, setBody] = useState("");
  const [copyState, setCopyState] = useState<"idle" | "done" | "manual">("idle");
  const ref = useRef<HTMLTextAreaElement>(null);

  const track = (name: string) =>
    (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.(
      name === "copy" ? "case_copy" : "case_email_open",
      { page_language: "en" }
    );

  const openMail = () => {
    track("email");
    const subject = encodeURIComponent("WhyNotMe — free rejection analysis");
    const text = encodeURIComponent(body.trim() || PLACEHOLDER);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${text}`;
  };

  // navigator.clipboard.writeText 은 문서가 포커스를 잃으면 프라미스가 끝나지
  // 않고 매달려서 버튼이 아무 반응도 안 하는 상태가 된다. 그래서 비동기 API를
  // 쓰지 않고, 입력창을 선택한 뒤 동기 execCommand로 복사한다. 실패해도 텍스트는
  // 이미 선택돼 있으니 사용자가 Ctrl/Cmd+C로 바로 이어갈 수 있다.
  const copy = () => {
    track("copy");
    const el = ref.current;
    if (!el) return;
    // 아직 아무것도 안 썼으면 예시를 실제 값으로 채워 넣어 편집·복사 둘 다 되게 한다
    if (!body.trim()) setBody(PLACEHOLDER);
    el.value = body.trim() || PLACEHOLDER;
    el.focus();
    el.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    setCopyState(ok ? "done" : "manual");
    if (ok) setTimeout(() => setCopyState("idle"), 2500);
  };

  return (
    <div id={id}>
      <label
        htmlFor="case"
        className="block text-xl leading-relaxed text-slate-700 md:text-2xl"
      >
        Paste one rejection. We&apos;ll analyze it for free — first 10 cases.
      </label>
      <textarea
        id="case"
        ref={ref}
        rows={6}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder={PLACEHOLDER}
        className="mt-6 w-full resize-y rounded-xl border border-slate-300 p-4 text-lg leading-relaxed text-slate-800 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
      />
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          onClick={openMail}
          className="rounded-xl bg-slate-900 px-8 py-4 text-lg font-bold text-white transition hover:bg-slate-700"
        >
          Send by email →
        </button>
        <button
          onClick={copy}
          className="text-base text-slate-500 underline transition hover:text-slate-900"
        >
          {copyState === "done"
            ? "Copied"
            : copyState === "manual"
              ? "Selected — press Ctrl/Cmd+C"
              : "or copy it"}
        </button>
      </div>
      <p className="mt-4 text-base leading-relaxed text-slate-500">
        Opens your mail app with this filled in, addressed to {CONTACT_EMAIL}.
        Nothing is sent from this page.
      </p>
    </div>
  );
}
