import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222222;
  color: #ffffff;
  text-align: center;
`;

const AboutPage = () => {
  return (
    <Wrapper>
      <span>
        여름이었다.ᐟ
        <br />
        <br />
        나의 필을 찌르르 오게 한,
        <br />
        다시는 이런 감상은 내게 없을 날을 위해
        <br />
        그때 그 감정을 남겨봐요.ᐟ
        <br />
        <br />
        해당 디자인과 기능들은
        <br />앱 어플리케이션인 'piece'를
        <br />
        오마주하여 제작했습니다.
      </span>
    </Wrapper>
  );
};

export default AboutPage;
