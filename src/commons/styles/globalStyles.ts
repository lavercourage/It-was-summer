import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    /* min-width: 375px; */
    font-size: 1rem;
  }

  // 어그로체 Bold
  @font-face {
    font-family: "SBAggroB";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  // 어그로체 Medium
  @font-face {
    font-family: "SBAggroM";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroM.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  // 어그로체 Lite
  @font-face {
    font-family: "SBAggroL";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroL.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;
