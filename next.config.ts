import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /en 은 레딧·X·레딧 배너에 이미 뿌려진 주소라 살려 둔다.
  // 이제 언어는 한 페이지 안에서 갈리므로 ?lang=en 을 달아 루트로 보낸다.
  async redirects() {
    return [{ source: "/en", destination: "/?lang=en", permanent: false }];
  },
};

export default nextConfig;
