import { useRouter } from "next/router";
import * as L from "./layoutHeader.styles";

const LayoutHeader = () => {
  const router = useRouter();

  const onClickMovePage = (e: any) => {
    router.push(e.target.id);
  };

  return (
    <L.Wrapper>
      <L.Logo id="/" onClick={onClickMovePage}>
        It was summer.
      </L.Logo>
      <L.CategoryWrapper>
        <L.Category id="/about" onClick={onClickMovePage}>
          About
        </L.Category>
        <L.Category id="/login" onClick={onClickMovePage}>
          Login
        </L.Category>
        {/* 반응형은 아이콘으로 표현해보기 */}
      </L.CategoryWrapper>
    </L.Wrapper>
  );
};

export default LayoutHeader;
