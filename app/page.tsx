import Image from "next/image";
import TallyEmbed from "@/components/TallyEmbed";
import PricingCta from "@/components/PricingCta";
import BetaCta from "@/components/BetaCta";

const PAIN_STEPS = ["지원", "탈락", "원인 불분명"];

const QUOTES = [
  "“내 레주메가 문제인지 비자가 문제인지 모르겠어요”",
  "“100개 넘게 지원했는데 인터뷰가 한 번도 안 와요”",
];

const VERDICT_EVIDENCE = [
  "지원 후 31시간 만에 자동 탈락 메일 (사람 검토 전 단계)",
  "지원서에 스폰서십 필요 여부 질문 존재",
  "이 회사의 최근 3년 H-1B 스폰서 이력 0건",
];

const VERDICT_CHECKLIST = [
  "인턴십은 CPT — 스폰서 불필요라고 답했는지 확인",
  "DSO에게 CPT 자격 확인",
  "스폰서 이력 있는 회사로 재타겟팅",
];

const HOW_STEPS = [
  "탈락 메일을 복사해 붙여넣으세요 — 회사·날짜·문구는 알아서 읽습니다",
  "신호를 분석합니다 — 탈락 속도, 스폰서십 질문, 공고 문구, 회사의 H-1B 이력",
  "원인별 체크리스트를 받습니다",
];

const PIPELINE = [
  {
    step: "데이터 수집",
    items: [
      "지원 기록 — 지원 시점과 탈락 통보 시점 (탈락 메일 기준)",
      "지원서의 스폰서십 질문에 뭐라고 답했는지",
      "공고(JD) 원문",
      "회사의 H-1B 스폰서 이력 (USCIS 공식 기록)",
      "내 이력서와 비자 신분 (F-1 · CPT/OPT/STEM OPT)",
    ],
  },
  {
    step: "분석",
    items: [
      "Visa Score — 이 회사가 비자 필요한 지원자를 실제 채용해 왔는지",
      "Resume Score — JD와 이력서가 얼마나 맞는지 (ATS 관점)",
      "Rejection Pattern — 몇 시간 만에 탈락했는지 (자동 필터 vs 사람 검토)",
    ],
  },
  {
    step: "결과",
    items: [
      "원인별 확률을 도표로 — 왜 그렇게 판단했는지 근거와 함께",
      "다음에 어떤 회사를 지원할지 제안",
      "이력서 어디를 수정할지 제안",
    ],
  },
];

const RESULT_PREVIEW = [
  { label: "비자 문제 가능성", pct: 65, color: "bg-navy" },
  { label: "이력서 문제 가능성", pct: 30, color: "bg-amber-500" },
  { label: "기타", pct: 5, color: "bg-slate-400" },
];

const BETA_TERMS = [
  "탈락 원인 분석 리포트 무료 제공 (얼리버드 $4.9 → $0)",
  "조건: 사용 후 솔직한 후기 1건 작성",
  "후기는 동의한 범위에서 이니셜·학교/전공만 공개",
  "선착순 10명 마감",
];

const PRICING_INCLUDES = [
  "비자/레주메 원인 판정 (신뢰도 + 근거)",
  "원인별 체크리스트",
  "지원 기록 기반 분석",
];

const FAQ = [
  {
    q: "지금 결제하나요?",
    a: "아니요. 사전예약은 이메일 등록이며, 출시 시 얼리버드 가격($4.9)으로 결제 링크를 보내드립니다. 출시 전까지 비용이 청구되지 않고, 예약 취소도 자유롭습니다.",
  },
  {
    q: "인턴십도 스폰서가 필요한가요?",
    a: "아니요. F-1 학생의 인턴십은 대부분 CPT로 가능하며 회사의 비자 스폰서가 필요 없습니다. 이 오해 때문에 스폰서십 질문에 잘못 답해 자동 탈락하는 경우가 많습니다.",
  },
  {
    q: "내 정보는 어디에 저장되나요?",
    a: "내 컴퓨터 안에만 저장됩니다. 어디로도 보내지 않기 때문에 저희조차 여러분의 기록을 볼 수 없어요. 인터넷에 올라가지 않으니 유출될 곳도 없습니다.",
  },
  {
    q: "체험단은 무엇인가요?",
    a: "출시 전 선착순 10명에게 분석 리포트를 무료로 드리고, 대신 솔직한 사용 후기 1건을 받습니다. 후기는 동의한 범위에서 이니셜·학교/전공만 공개해 랜딩에 게재됩니다. 사전예약 폼에서 '체험단으로도 참여할래요'를 선택하면 신청됩니다.",
  },
  {
    q: "이민 자문인가요?",
    a: "아니에요. 탈락 이유를 짐작하는 데 도움을 주는 참고용 도구일 뿐이에요. 비자처럼 중요한 결정은 꼭 학교의 유학생 담당 선생님(DSO)과 상의하고 정하세요.",
  },
];

export default function Home() {
  return (
    <main>
      {/* 1. Hero */}
      <section className="px-4 py-10 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Image
            src="/logo.png"
            alt="와이낫미 — WHY NOT ME"
            width={960}
            height={286}
            priority
            className="mx-auto mb-8 h-16 w-auto md:h-20"
          />
          <h1 className="text-3xl font-extrabold leading-snug text-navy md:text-4xl">
            유학생 취업,
            <br />
            비자인지 레주메인지부터 진단하세요
          </h1>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            F-1 유학생이 탈락 메일을 붙여넣기만 하면 탈락 원인을 추정하고,
            원인별로 지금 확인할 것을 알려드립니다
          </p>
          <p className="mt-3 text-sm font-medium text-slate-500">
            USCIS 공식 H-1B 기록 기반 — 스폰서 기업 82,000곳 (2021–2023)
          </p>
          <span className="mt-4 inline-block rounded-full border border-navy px-4 py-1.5 text-sm font-semibold text-navy">
            탈락 원인 분석 리포트 — 정가 $9.9, 얼리버드 $4.9 (선착순)
          </span>
          <div className="mt-6">
            <TallyEmbed id="hero-form" />
          </div>
        </div>
      </section>

      {/* 2. PainLoop */}
      <section className="bg-slate-50 px-4 py-10 md:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-navy">
            이게 당신 이야기라면,
          </h2>
          <p className="mt-3 text-center text-sm text-slate-600 md:text-base">
            원인부터 알아야 다음 지원이 달라져요.
          </p>
          <div className="mt-8 flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-3">
            {PAIN_STEPS.map((step, i) => (
              <div key={step} className="flex flex-col items-center gap-2 md:flex-row md:gap-3">
                <span className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
                  {step}
                </span>
                {i < PAIN_STEPS.length - 1 && (
                  <span aria-hidden className="text-slate-400 md:rotate-0 rotate-90">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {QUOTES.map((quote) => (
              <blockquote
                key={quote}
                className="rounded-xl bg-white p-5 text-sm leading-relaxed text-slate-700 shadow-sm ring-1 ring-slate-200"
              >
                {quote}
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VerdictPreview */}
      <section className="px-4 py-10 md:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-navy">
            WhyNotMe는 이렇게 알려드립니다
          </h2>
          <p className="mt-3 text-center text-sm text-slate-600 md:text-base">
            추측이 아니라 기업 82,000곳의 실제 H-1B 스폰서 기록(USCIS
            2021–2023)에 근거해 체크리스트로 제시합니다.
          </p>
          <div className="mx-auto mt-8 max-w-xl rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
            <span className="inline-block rounded-full bg-amber-500 px-3 py-1 text-sm font-bold text-white">
              비자 원인 추정 · 신뢰도 72%
            </span>
            <div className="mt-5">
              <p className="text-sm font-semibold text-slate-500">근거</p>
              <ul className="mt-2 space-y-2">
                {VERDICT_EVIDENCE.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-700">
                    <span aria-hidden className="text-navy">
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5">
              <p className="text-sm font-semibold text-slate-500">지금 확인할 것</p>
              <ul className="mt-2 space-y-2">
                {VERDICT_CHECKLIST.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <input type="checkbox" disabled className="h-4 w-4 rounded border-slate-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HowItWorks */}
      <section className="bg-slate-50 px-4 py-10 md:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-navy">이렇게 진행됩니다</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {HOW_STEPS.map((step, i) => (
              <div
                key={step}
                className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 Pipeline: 수집 → 분석 → 결과 */}
      <section className="px-4 py-10 md:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-navy">
            무엇을 모아, 어떻게 판정하나요
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {PIPELINE.map((col, i) => (
              <div
                key={col.step}
                className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                <p className="text-sm font-bold text-navy">
                  {i + 1}. {col.step}
                </p>
                <ul className="mt-3 space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-slate-700">
                      <span aria-hidden className="font-bold text-navy">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-md rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold text-slate-700">결과 화면 예시</p>
            <div className="mt-3 space-y-2.5">
              {RESULT_PREVIEW.map((row) => (
                <div key={row.label} className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="w-28 shrink-0">{row.label}</span>
                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full ${row.color}`}
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                  <strong className="w-9 text-right text-slate-800">{row.pct}%</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing */}
      <section className="px-4 py-10 md:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-navy">
            출시 전 얼리버드 가격
          </h2>
          <div className="mx-auto mt-8 max-w-md rounded-2xl bg-white p-7 text-center shadow-md ring-1 ring-slate-200">
            <p className="text-base font-semibold text-slate-700">
              탈락 원인 분석 리포트 (1회)
            </p>
            <p className="mt-3">
              <span className="text-lg text-slate-400 line-through">$9.9</span>{" "}
              <span className="text-5xl font-extrabold text-navy">$4.9</span>
            </p>
            <ul className="mt-6 space-y-2.5 text-left">
              {PRICING_INCLUDES.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-700">
                  <span aria-hidden className="font-bold text-navy">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              지금은 결제하지 않습니다. 사전예약 후 출시 시 얼리버드 가격으로 결제
              링크를 보내드립니다. 마음이 바뀌면 무시하셔도 됩니다.
            </p>
            <PricingCta />
          </div>
        </div>
      </section>

      {/* 6. BetaReviewers */}
      <section className="bg-slate-50 px-4 py-10 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-navy">
            출시 전 체험단 10명을 모집합니다
          </h2>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            무료로 분석 리포트를 받아보고, 솔직한 후기를 남겨주세요.
          </p>
          <div className="mx-auto mt-8 max-w-md rounded-2xl bg-white p-7 text-left shadow-md ring-1 ring-slate-200">
            <ul className="space-y-2.5">
              {BETA_TERMS.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-700">
                  <span aria-hidden className="font-bold text-navy">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              사전예약 폼에서 &lsquo;체험단으로도 참여할래요&rsquo;를 선택하면
              신청됩니다.
            </p>
            <BetaCta />
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="px-4 py-10 md:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-navy">자주 묻는 질문</h2>
          <div className="mt-8 space-y-3">
            {FAQ.map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-800">
                  {q}
                  <span
                    aria-hidden
                    className="ml-4 text-slate-400 transition group-open:rotate-180"
                  >
                    ⌄
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FinalCTA */}
      <section className="bg-navy px-4 py-10 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">
            원인을 분석하여 수정할 부분을 파악해 보세요
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            얼리버드 $4.9 — 선착순 마감 후 정가 $9.9로 돌아갑니다
          </p>
          <div className="mt-6">
            <TallyEmbed />
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="px-4 py-8">
        <div className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-slate-500">
          <p>
            법률·이민 자문이 아닌 참고용 도구입니다. 비자 관련 결정은 반드시 학교
            DSO와 상담하세요.
          </p>
          <p className="mt-2">
            문의:{" "}
            <a href="mailto:kennyinus13@gmail.com" className="underline">
              kennyinus13@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
