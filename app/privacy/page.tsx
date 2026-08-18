import type { Metadata } from "next";
import Link from "next/link";
import LangLock from "@/components/LangLock";

// 구글 플레이·앱스토어 등록에 개인정보처리방침 URL이 필수라 만든 페이지다.
// 앱이 실제로 아무것도 수집하지 않으므로 방침도 그 사실만 정확히 적는다.
// 앱의 수집 방식이 바뀌면(예: 메일 전달 기능) 이 문서와 스토어 '데이터 안전' 항목을 함께 고쳐야 한다.
export const metadata: Metadata = {
  title: "개인정보처리방침 — WhyNotMe",
  description: "WhyNotMe 앱과 웹사이트의 개인정보 처리 방침",
};

const UPDATED = "2026-08-16";

export default function Privacy() {
  return (
    <main className="mx-auto max-w-[720px] px-5 py-16">
      <LangLock value="ko" />
      <Link href="/" className="text-sm text-slate-500 underline">
        ← WhyNotMe
      </Link>

      <h1 className="mt-8 text-3xl font-bold leading-snug">개인정보처리방침</h1>
      <p className="mt-2 text-sm text-slate-500">최종 수정일 {UPDATED}</p>

      <h2 className="mt-12 text-xl font-semibold">한 줄 요약</h2>
      <p className="mt-3 leading-relaxed">
        WhyNotMe 모바일 앱은 <strong>어떤 개인정보도 수집하거나 전송하지 않습니다.</strong> 앱에 입력한
        지원 기록·레주메·비자 정보는 전부 사용자의 휴대폰 안에만 저장됩니다. 계정도 로그인도 없습니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold">1. 모바일 앱</h2>
      <h3 className="mt-6 font-semibold">수집하는 정보</h3>
      <p className="mt-2 leading-relaxed">
        없습니다. 앱은 서버를 두지 않으며, 사용자를 식별하는 어떤 정보도 외부로 보내지 않습니다.
        광고 SDK와 분석 SDK를 사용하지 않습니다.
      </p>

      <h3 className="mt-6 font-semibold">기기 안에만 저장되는 것</h3>
      <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
        <li>지원 기록 (회사명, 직무, 지원일, 결과, 탈락 통보일, 공고 본문)</li>
        <li>비자 프로필 (체류 신분, 졸업 시기, STEM 여부, 현재 단계)</li>
        <li>사용자가 직접 붙여넣거나 불러온 레주메 텍스트</li>
        <li>체크리스트 진행 상태</li>
      </ul>
      <p className="mt-3 leading-relaxed">
        이 데이터는 기기 내부 저장소(SQLite)에만 있으며, 앱을 삭제하면 함께 지워집니다. 앱의 &lsquo;나&rsquo;
        탭에서 언제든 전체 삭제하거나 JSON으로 내보낼 수 있습니다.
      </p>

      <h3 className="mt-6 font-semibold">공유시트로 받은 내용</h3>
      <p className="mt-2 leading-relaxed">
        다른 앱에서 채용 공고나 메일 내용을 공유하면 앱이 그 텍스트를 읽어 회사명·직무·날짜를 추출합니다.
        이 처리는 전부 기기 안에서 일어나며, 원문이 외부로 전송되지 않습니다. 공유된 링크를 서버가 대신
        열어보는 일도 없습니다.
      </p>

      <h3 className="mt-6 font-semibold">권한</h3>
      <p className="mt-2 leading-relaxed">
        앱은 연락처·위치·사진·카메라·주소록에 접근하지 않습니다. 사용자가 직접 파일을 고를 때만
        문서 선택기를 띄웁니다.
      </p>

      <h3 className="mt-6 font-semibold">회사 정보 데이터</h3>
      <p className="mt-2 leading-relaxed">
        앱에 들어 있는 회사별 H-1B 스폰서 이력은 미국 이민국(USCIS) H-1B Employer Data Hub와
        미국 노동부(DOL) OFLC 공개 자료를 가공한 것으로, 앱 설치 시 함께 배포됩니다. 회사를 검색할 때
        외부로 요청을 보내지 않습니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold">2. 이 웹사이트</h2>
      <p className="mt-3 leading-relaxed">
        랜딩페이지(whynotme-landing.vercel.app)는 앱과 달리 방문 통계를 봅니다. Google Analytics 4와
        Microsoft Clarity를 사용해 페이지 조회수와 클릭 흐름을 집계하며, 이는 어떤 문구가 도움이 되는지
        판단하는 용도로만 씁니다.
      </p>
      <p className="mt-3 leading-relaxed">
        사전예약 폼은 Tally를 통해 제공되며, 사용자가 직접 입력한 이메일과 응답이 Tally에 저장됩니다.
        삭제를 원하시면 아래 메일로 알려주세요.
      </p>

      <h2 className="mt-10 text-xl font-semibold">3. 제3자 제공</h2>
      <p className="mt-3 leading-relaxed">
        앱에서 수집하는 정보가 없으므로 제3자에게 제공하거나 판매할 것도 없습니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold">4. 아동</h2>
      <p className="mt-3 leading-relaxed">
        이 서비스는 대학생 이상을 대상으로 하며, 만 13세 미만 아동을 대상으로 하지 않습니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold">5. 방침 변경</h2>
      <p className="mt-3 leading-relaxed">
        수집 방식이 바뀌면 이 페이지를 수정하고 최종 수정일을 갱신합니다. 앱이 데이터를 외부로 보내게
        되는 변경이 생기면, 그 기능을 쓰기 전에 앱 안에서 따로 안내하고 동의를 받습니다.
      </p>

      <h2 className="mt-10 text-xl font-semibold">6. 문의</h2>
      <p className="mt-3 leading-relaxed">
        kennyinus13@gmail.com
      </p>

      <p className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
        WhyNotMe의 판정은 참고용 추정이며 법률·이민 자문이 아닙니다. 비자 관련 결정은 반드시 학교 DSO와
        상담하세요.
      </p>
    </main>
  );
}
