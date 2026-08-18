"use client";

import { useRef, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/config";
import { COPY, type Lang } from "@/lib/copy";

// 두 언어 모두 선택지 폼(Tally) 대신 이 카드 하나를 쓴다.
// 고를 항목 없이 이메일 칸과 내용 칸만 두고, 버튼을 누르면 사용자의 메일 앱이
// 그대로 채워진 채 열린다. 백엔드가 없으므로 전송은 메일 앱이 맡는다.
// 메일 앱이 없는 환경(웹메일만 쓰는 경우)에서도 막히지 않게 복사 버튼을 함께 둔다.

export default function EmailCase({ id, lang }: { id?: string; lang: Lang }) {
  const c = COPY[lang].contact;
  const [from, setFrom] = useState("");
  const [body, setBody] = useState("");
  const [copyState, setCopyState] = useState<"idle" | "done" | "manual">("idle");
  const ref = useRef<HTMLTextAreaElement>(null);

  // 한 문서에 두 언어가 같이 있으므로 입력 id도 언어별로 갈라야 한다
  const fromId = `contact-from-${lang}`;
  const bodyId = `contact-body-${lang}`;

  const track = (name: string) =>
    (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.(
      "event",
      name,
      { page_language: lang }
    );

  const openMail = () => {
    track("case_email_open");
    const text = body.trim() || c.bodyPlaceholder;
    // 메일 앱은 보내는 주소를 알아서 채우지만, 웹메일로 옮겨 적는 경우를 위해
    // 답장 받을 주소를 본문 끝에 한 줄로 남긴다.
    const full = from.trim() ? `${text}\n\n---\n${c.emailLabel}: ${from.trim()}` : text;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      c.subject
    )}&body=${encodeURIComponent(full)}`;
  };

  // navigator.clipboard.writeText 은 문서가 포커스를 잃으면 프라미스가 끝나지
  // 않고 매달려서 버튼이 아무 반응도 안 하는 상태가 된다. 그래서 비동기 API를
  // 쓰지 않고, 입력창을 선택한 뒤 동기 execCommand로 복사한다. 실패해도 텍스트는
  // 이미 선택돼 있으니 사용자가 Ctrl/Cmd+C로 바로 이어갈 수 있다.
  const copy = () => {
    track("case_copy");
    const el = ref.current;
    if (!el) return;
    // 아직 아무것도 안 썼으면 예시를 실제 값으로 채워 넣어 편집·복사 둘 다 되게 한다
    if (!body.trim()) setBody(c.bodyPlaceholder);
    el.value = body.trim() || c.bodyPlaceholder;
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

  const field =
    "mt-3 w-full rounded-xl border border-slate-300 p-4 text-lg leading-relaxed text-slate-800 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none";

  return (
    <div
      id={id}
      className="rounded-2xl border border-slate-300 p-6 md:p-8"
    >
      <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
        {c.title}
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-600 md:text-xl">
        {c.lead}
      </p>

      <div className="mt-8">
        <label htmlFor={fromId} className="text-base font-semibold text-slate-700">
          {c.emailLabel}
        </label>
        <input
          id={fromId}
          type="email"
          autoComplete="email"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder={c.emailPlaceholder}
          className={field}
        />
      </div>

      <div className="mt-6">
        <label htmlFor={bodyId} className="text-base font-semibold text-slate-700">
          {c.bodyLabel}
        </label>
        <textarea
          id={bodyId}
          ref={ref}
          rows={6}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder={c.bodyPlaceholder}
          className={`${field} resize-y`}
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          onClick={openMail}
          className="rounded-xl bg-slate-900 px-8 py-4 text-lg font-bold text-white transition hover:bg-slate-700"
        >
          {c.send}
        </button>
        <button
          onClick={copy}
          className="text-base text-slate-500 underline transition hover:text-slate-900"
        >
          {copyState === "done"
            ? c.copyDone
            : copyState === "manual"
              ? c.copyManual
              : c.copyIdle}
        </button>
      </div>

      <p className="mt-5 text-base leading-relaxed text-slate-500">
        {c.note.replace("{email}", CONTACT_EMAIL)}
      </p>
    </div>
  );
}
