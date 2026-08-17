import Image from "next/image";
import TallyEmbed from "@/components/TallyEmbed";
import PricingCta from "@/components/PricingCta";
import LangSwitch from "@/components/LangSwitch";
import { TALLY_FORM_ID_KO } from "@/lib/config";

const PIPELINE = [
  {
    step: "이런 걸 모아요",
    desc: "지원·탈락 시점, 채용공고, 비자 질문 답변, 회사의 스폰서 이력과 내 이력서를 모아요.",
  },
  {
    step: "이렇게 살펴봐요",
    desc: "회사의 비자 채용 이력, 공고와 내 경력의 적합도, 지원 후 탈락까지 걸린 시간을 함께 분석해요.",
  },
  {
    step: "이렇게 알려드려요",
    desc: "비자 또는 이력서가 원인일 가능성과 그 근거, 다음 지원에서 바꿔야 할 부분까지 알려드려요.",
  },
];

const RESULT_BARS = [
  { label: "비자 문제", pct: 65, color: "bg-navy" },
  { label: "이력서 문제", pct: 30, color: "bg-slate-500" },
  { label: "기타", pct: 5, color: "bg-slate-300" },
];

const FAQ = [
  {
    q: "지금 결제하나요?",
    a: "아니요. 이메일만 남기시면 돼요. 출시되면 처음 가격($4.90)으로 결제 링크를 보내드려요. 그때 마음이 바뀌었으면 무시하셔도 됩니다.",
  },
  {
    q: "인턴십도 스폰서가 필요한가요?",
    a: "아니요. F-1 학생의 인턴십은 대부분 CPT로 가능해서 회사가 비자를 지원해 줄 필요가 없어요. 이걸 몰라서 스폰서십 질문에 잘못 답해 자동 탈락하는 경우가 많아요.",
  },
  {
    q: "내 정보는 어디에 저장되나요?",
    a: "내 컴퓨터 안에만 저장돼요. 어디로도 보내지 않아서 저희조차 여러분의 기록을 볼 수 없어요.",
  },
  {
    q: "무료 초기 테스트는 뭔가요?",
    a: "출시 전에 선착순 10명에게 분석을 무료로 해드리고, 대신 솔직한 후기 1건을 받아요. 후기는 동의한 범위에서 이니셜·학교/전공만 공개돼요. 폼에서 체크박스를 선택하면 신청됩니다.",
  },
  {
    q: "이민 자문인가요?",
    a: "아니에요. 탈락 이유를 짐작하는 데 도움을 주는 참고용 도구예요. 비자처럼 중요한 결정은 꼭 학교의 유학생 담당 선생님(DSO)과 상의하세요.",
  },
];

function Divider() {
  return <hr className="my-16 border-slate-200 md:my-24" />;
}

export default function Home() {
  return (
    <main className="px-5">
      <div className="mx-auto max-w-[720px] py-16 md:py-24">
        {/* 인트로 */}
        <section>
          <div className="flex items-start justify-between gap-6">
            <Image
              src="/logo.png"
              alt="와이낫미 — WHY NOT ME"
              width={960}
              height={286}
              priority
              className="h-10 w-auto md:h-12"
            />
            <LangSwitch href="/en" label="English" />
          </div>
          <h1 className="mt-12 text-4xl font-extrabold leading-snug text-slate-900 md:text-5xl">
            왜 떨어졌는지 아무도
            <br />
            알려주지 않으니까.
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-slate-700 md:text-2xl">
            비자인지 레주메인지,
            <br />
            지원 기록을 보고 찾아드립니다.
          </p>
          <p className="mt-6 text-base text-slate-500">
            USCIS H-1B 데이터 + Job Description + Resume 분석
          </p>
        </section>

        <Divider />

        {/* 사전예약 폼 */}
        <section>
          <TallyEmbed
            id="hero-form"
            formId={TALLY_FORM_ID_KO}
            lang="ko"
            title="사전예약 폼"
          />
          <p className="mt-6 text-base text-slate-500">
            USCIS H-1B 데이터 기반 · 초기 사용자 $4.90
          </p>
        </section>

        <Divider />

        {/* 어떻게 찾아내나요 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            어떻게 찾아내나요
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
                        className="flex items-center gap-4 text-lg text-slate-700"
                      >
                        <span className="w-32 shrink-0">{row.label}</span>
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

        {/* 가격 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">가격</h2>
          <p className="mt-6 text-xl text-slate-700 md:text-2xl">
            탈락 원인 분석 1회 —{" "}
            <span className="text-slate-400 line-through">$9.90</span>{" "}
            <strong className="text-slate-900">$4.90</strong>
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            지금 결제하는 건 아니에요. 출시되면 이 가격으로 링크를 보내드려요.
          </p>
          <PricingCta label="먼저 써보기 →" lang="ko" />
        </section>

        <Divider />

        {/* 자주 묻는 질문 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            자주 묻는 질문
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

        {/* 푸터 */}
        <footer className="mt-20 text-base leading-relaxed text-slate-500 md:mt-28">
          <p>
            법률·이민 자문이 아닌 참고용 도구입니다. 비자 관련 결정은 반드시
            학교 DSO와 상담하세요.
          </p>
          <p className="mt-2">
            문의:{" "}
            <a href="mailto:kennyinus13@gmail.com" className="underline">
              kennyinus13@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
