import LandingBody from "@/components/LandingBody";

// 한국어·영어 두 벌을 다 렌더하고 <html data-lang> 값에 따라 CSS가 한쪽만 보여준다.
// 서버가 어느 언어를 줄지 고르지 않으므로 정적으로 캐시되고, 전환은 리렌더 없이 즉시다.
export default function Home() {
  return (
    <>
      <div data-l="ko" lang="ko">
        <LandingBody lang="ko" />
      </div>
      <div data-l="en" lang="en">
        <LandingBody lang="en" />
      </div>
    </>
  );
}
