import Image from "next/image";
import TallyEmbed from "@/components/TallyEmbed";
import PricingCta from "@/components/PricingCta";
import LangSwitch from "@/components/LangSwitch";
import { TALLY_FORM_ID_EN, CONTACT_EMAIL } from "@/lib/config";

const PIPELINE = [
  {
    step: "What we collect",
    desc: "When you applied and when the rejection came, the job posting, how you answered the sponsorship question, the company's sponsorship history, and your resume.",
  },
  {
    step: "What we look at",
    desc: "Whether the company has actually filed for visas, how well the posting matches your background, and how fast the rejection arrived.",
  },
  {
    step: "What you get",
    desc: "How likely it is that visa screening or your resume caused it, the evidence behind that call, and what to change on your next application.",
  },
];

const RESULT_BARS = [
  { label: "Visa screening", pct: 65, color: "bg-navy" },
  { label: "Resume mismatch", pct: 30, color: "bg-slate-500" },
  { label: "Other", pct: 5, color: "bg-slate-300" },
];

const FAQ = [
  {
    q: "Am I paying now?",
    a: "No. Just leave your email. When we launch, we'll send you a payment link at the early price ($4.90). If you've changed your mind by then, ignore it.",
  },
  {
    q: "Do internships even need sponsorship?",
    a: "Usually not. F-1 students can do most internships on CPT, so the company doesn't have to sponsor a visa. Not knowing that is exactly why a lot of students answer the sponsorship question wrong and get auto-rejected.",
  },
  {
    q: "Where is my data stored?",
    a: "On your own computer only. Nothing is uploaded anywhere, so not even we can see your records.",
  },
  {
    q: "What is the free early test?",
    a: "Before launch we analyze 10 cases for free, first come first served, in exchange for one honest review. Reviews show only initials and school or major, and only what you agree to. Check the box in the form to apply.",
  },
  {
    q: "Is this immigration advice?",
    a: "No. It's a reference tool that helps you guess why a rejection happened. For decisions that actually matter, talk to your school's DSO.",
  },
];

function Divider() {
  return <hr className="my-16 border-slate-200 md:my-24" />;
}

export default function EnHome() {
  return (
    <main className="px-5">
      <div className="mx-auto max-w-[720px] py-16 md:py-24">
        {/* Intro */}
        <section>
          <div className="flex items-start justify-between gap-6">
            <Image
              src="/logo-en.png"
              alt="WhyNotMe"
              width={1112}
              height={228}
              priority
              className="h-10 w-auto md:h-12"
            />
            <LangSwitch href="/" label="한국어" />
          </div>
          <h1 className="mt-12 text-4xl font-extrabold leading-snug text-slate-900 md:text-5xl">
            Nobody tells you why
            <br />
            you got rejected.
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-slate-700 md:text-2xl">
            Visa screening, or your resume?
            <br />
            We read your application history and tell you which.
          </p>
          <p className="mt-6 text-base text-slate-500">
            USCIS H-1B data + job description + resume analysis
          </p>
        </section>

        <Divider />

        {/* Pre-order form */}
        <section>
          <TallyEmbed
            id="hero-form"
            formId={TALLY_FORM_ID_EN}
            lang="en"
            title="Pre-order form"
            fallback={{
              line: "Send us one rejection — the company, the role, and how long it took — and we'll analyze it for free. First 10 cases.",
              cta: "Email your case →",
            }}
          />
          <p className="mt-6 text-base text-slate-500">
            Built on USCIS H-1B data · $4.90 for early users
          </p>
        </section>

        <Divider />

        {/* How it works */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            How we figure it out
          </h2>
          <div className="mt-12 space-y-12">
            {PIPELINE.map((col, i) => (
              <div key={col.step}>
                <p className="text-xl font-bold text-navy md:text-2xl">
                  {i + 1}. {col.step}
                </p>
                <p className="mt-4 text-lg leading-relaxed text-slate-700 md:text-xl">
                  {col.desc}
                </p>
                {i === 2 && (
                  <div className="mt-8 space-y-4">
                    {RESULT_BARS.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center gap-4 text-base text-slate-700 md:text-lg"
                      >
                        <span className="w-32 shrink-0 md:w-44 md:whitespace-nowrap">
                          {row.label}
                        </span>
                        <div className="h-4 flex-1 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className={`h-full rounded-full ${row.color}`}
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

        {/* Pricing */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Pricing
          </h2>
          <p className="mt-6 text-xl text-slate-700 md:text-2xl">
            One rejection analysis —{" "}
            <span className="text-slate-400 line-through">$9.90</span>{" "}
            <strong className="text-slate-900">$4.90</strong>
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            You&apos;re not paying today. When it launches, we&apos;ll send you a
            link at this price.
          </p>
          <PricingCta label="Try it first →" lang="en" />
        </section>

        <Divider />

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Frequently asked
          </h2>
          <div className="mt-8">
            {FAQ.map(({ q, a }) => (
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

        {/* Footer */}
        <footer className="mt-20 text-base leading-relaxed text-slate-500 md:mt-28">
          <p>
            This is a reference tool, not legal or immigration advice. Always
            confirm visa decisions with your school&apos;s DSO.
          </p>
          <p className="mt-2">
            Contact:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
