import Image from "next/image";
import TallyEmbed from "@/components/TallyEmbed";
import EmailCase from "@/components/EmailCase";
import PricingCta from "@/components/PricingCta";
import LangToggle from "@/components/LangToggle";
import { COPY, type Lang } from "@/lib/copy";
import { TALLY_FORM_ID_KO, CONTACT_EMAIL } from "@/lib/config";

// 두 언어가 같은 마크업을 쓴다. 이 파일은 문구를 모르고 lib/copy.ts 사전만 받아 그린다.
// 페이지에는 ko·en 두 벌이 다 들어가고 <html data-lang>에 따라 CSS가 한쪽만 보여준다.

const BAR_COLORS = ["bg-navy", "bg-slate-500", "bg-slate-300"];

function Divider() {
  return <hr className="my-16 border-slate-200 md:my-24" />;
}

export default function LandingBody({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  // 두 언어 블록이 한 문서에 같이 있으므로 id가 겹치면 안 된다.
  // CTA가 스크롤로 찾아가는 대상도 언어별로 갈라 둔다.
  const formId = `hero-form-${lang}`;

  return (
    <main className="px-5">
      <div className="mx-auto max-w-[720px] py-16 md:py-24">
        {/* 인트로 */}
        <section>
          <div className="flex items-start justify-between gap-4 md:gap-6">
            <Image
              src={c.logo.src}
              alt={c.logo.alt}
              width={c.logo.width}
              height={c.logo.height}
              priority
              className="h-8 w-auto shrink-0 md:h-12"
            />
            <LangToggle current={lang} />
          </div>
          <h1 className="mt-12 text-4xl font-extrabold leading-snug text-slate-900 md:text-5xl">
            {c.heroTitle.map((line, i) => (
              <span key={line}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-slate-700 md:text-2xl">
            {c.heroSub.map((line, i) => (
              <span key={line}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </p>
          <p className="mt-6 text-base text-slate-500">{c.heroNote}</p>
        </section>

        <Divider />

        {/* 신청 — 한국어는 Tally 폼, 영어는 선택지 없이 바로 메일을 띄우는 입력창 */}
        <section>
          {lang === "ko" ? (
            <TallyEmbed
              id={formId}
              formId={TALLY_FORM_ID_KO}
              lang="ko"
              title="사전예약 폼"
            />
          ) : (
            <EmailCase id={formId} />
          )}
          <p className="mt-6 text-base text-slate-500">{c.formNote}</p>
        </section>

        <Divider />

        {/* 어떻게 찾아내나요 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            {c.howTitle}
          </h2>
          <div className="mt-12 space-y-12">
            {c.pipeline.map((col, i) => (
              <div key={col.step}>
                <p className="text-xl font-bold text-navy md:text-2xl">
                  {i + 1}. {col.step}
                </p>
                <p className="mt-4 text-lg leading-relaxed text-slate-700 md:text-xl">
                  {col.desc}
                </p>
                {i === c.pipeline.length - 1 && (
                  <div className="mt-8 space-y-4">
                    {c.bars.map((row, j) => (
                      <div
                        key={row.label}
                        className="flex items-center gap-4 text-base text-slate-700 md:text-lg"
                      >
                        <span className="w-32 shrink-0 md:w-44 md:whitespace-nowrap">
                          {row.label}
                        </span>
                        <div className="h-4 flex-1 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className={`h-full rounded-full ${BAR_COLORS[j]}`}
                            style={{ width: `${row.pct}%` }}
                          />
                        </div>
                        <strong className="w-14 text-right text-slate-900">
                          {row.pct}%
                        </strong>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* 가격 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            {c.pricingTitle}
          </h2>
          <p className="mt-6 text-xl text-slate-700 md:text-2xl">
            {c.pricingItem}{" "}
            <span className="text-slate-400 line-through">{c.priceOld}</span>{" "}
            <strong className="text-slate-900">{c.priceNew}</strong>
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            {c.pricingNote}
          </p>
          <PricingCta label={c.ctaLabel} lang={lang} targetId={formId} />
        </section>

        <Divider />

        {/* 자주 묻는 질문 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            {c.faqTitle}
          </h2>
          <div className="mt-8">
            {c.faq.map(({ q, a }) => (
              <details key={q} className="group border-b border-slate-200 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-slate-900 md:text-xl">
                  {q}
                  <span
                    aria-hidden
                    className="ml-4 text-slate-400 transition group-open:rotate-180"
                  >
                    ⌄
                  </span>
                </summary>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* 푸터 */}
        <footer className="mt-20 text-base leading-relaxed text-slate-500 md:mt-28">
          <p>{c.disclaimer}</p>
          <p className="mt-2">
            {c.contactLabel}{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
