import "../styles/globals.css";
import Layout from "../src/components/commons/layout"; // 레이아웃 디자인(헤더)
import { Global } from "@emotion/react"; // emotion Grobal 설정
import { globalStyles } from "../src/commons/styles/globalStyles"; // 글로벌 스타일
// import

function MyApp({ Component, pageProps }: any) {
  console.log();
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
