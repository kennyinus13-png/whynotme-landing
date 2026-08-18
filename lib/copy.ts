// 한 페이지가 두 언어를 다 들고 있으므로 문구는 전부 여기 한 곳에 있다.
// 페이지 마크업(components/LandingBody.tsx)은 언어를 모르고 이 사전만 받아 그린다.
// 문구를 고칠 때 ko·en 둘 다 손대야 한다는 뜻이라, 타입으로 빠뜨림을 막는다.

export type Lang = "ko" | "en";

export type Copy = {
  /** 탭 제목 — 언어 전환 시 클라이언트에서 document.title 로 바꿔 준다 */
  title: string;
  logo: { src: string; alt: string; width: number; height: number };
  heroTitle: string[];
  heroSub: string[];
  heroNote: string;
  formNote: string;
  howTitle: string;
  pipeline: { step: string; desc: string }[];
  bars: { label: string; pct: number }[];
  pricingTitle: string;
  pricingItem: string;
  priceOld: string;
  priceNew: string;
  pricingNote: string;
  ctaLabel: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  disclaimer: string;
  contactLabel: string;
};

const ko: Copy = {
  title: "WhyNotMe — 탈락 원인, 비자인지 레주메인지",
  logo: {
    src: "/logo.png",
    alt: "와이낫미 — WHY NOT ME",
    width: 960,
    height: 286,
  },
  heroTitle: ["왜 떨어졌는지 아무도", "알려주지 않으니까."],
  heroSub: ["비자인지 레주메인지,", "지원 기록을 보고 찾아드립니다."],
  heroNote: "USCIS H-1B 데이터 + Job Description + Resume 분석",
  formNote: "USCIS H-1B 데이터 기반 · 초기 사용자 $4.90",
  howTitle: "어떻게 찾아내나요",
  pipeline: [
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
  ],
  bars: [
    { label: "비자 문제", pct: 65 },
    { label: "이력서 문제", pct: 30 },
    { label: "기타", pct: 5 },
  ],
  pricingTitle: "가격",
  pricingItem: "탈락 원인 분석 1회 —",
  priceOld: "$9.90",
  priceNew: "$4.90",
  pricingNote:
    "지금 결제하는 건 아니에요. 출시되면 이 가격으로 링크를 보내드려요.",
  ctaLabel: "먼저 써보기 →",
  faqTitle: "자주 묻는 질문",
  faq: [
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
  ],
  disclaimer:
    "법률·이민 자문이 아닌 참고용 도구입니다. 비자 관련 결정은 반드시 학교 DSO와 상담하세요.",
  contactLabel: "문의:",
};

const en: Copy = {
  title: "WhyNotMe — Visa screening or your resume?",
  logo: { src: "/logo-en.png", alt: "WhyNotMe", width: 1112, height: 228 },
  heroTitle: ["Nobody tells you why", "you got rejected."],
  heroSub: [
    "Visa screening, or your resume?",
    "We read your application history and tell you which.",
  ],
  heroNote: "USCIS H-1B data + job description + resume analysis",
  formNote: "Built on USCIS H-1B data · $4.90 for early users",
  howTitle: "How we figure it out",
  pipeline: [
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
  ],
  bars: [
    { label: "Visa screening", pct: 65 },
    { label: "Resume mismatch", pct: 30 },
    { label: "Other", pct: 5 },
  ],
  pricingTitle: "Pricing",
  pricingItem: "One rejection analysis —",
  priceOld: "$9.90",
  priceNew: "$4.90",
  pricingNote:
    "You're not paying today. When it launches, we'll send you a link at this price.",
  ctaLabel: "Try it first →",
  faqTitle: "Frequently asked",
  faq: [
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
      a: "Before launch we analyze 10 cases for free, first come first served, in exchange for one honest review. Reviews show only initials and school or major, and only what you agree to.",
    },
    {
      q: "Is this immigration advice?",
      a: "No. It's a reference tool that helps you guess why a rejection happened. For decisions that actually matter, talk to your school's DSO.",
    },
  ],
  disclaimer:
    "This is a reference tool, not legal or immigration advice. Always confirm visa decisions with your school's DSO.",
  contactLabel: "Contact:",
};

export const COPY: Record<Lang, Copy> = { ko, en };
