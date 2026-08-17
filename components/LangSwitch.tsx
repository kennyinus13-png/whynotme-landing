import Link from "next/link";

// 반대 언어 페이지로 보내는 작은 링크. 레이아웃을 흔들지 않게 로고 줄 오른쪽에 둔다
export default function LangSwitch({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      hrefLang={href === "/en" ? "en" : "ko"}
      className="text-base text-slate-500 underline transition hover:text-slate-900"
    >
      {label}
    </Link>
  );
}
