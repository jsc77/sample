import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>포트폴리오</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="안녕하세요" />
        <p className="text-amber-600">
          개발중입니다<code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
