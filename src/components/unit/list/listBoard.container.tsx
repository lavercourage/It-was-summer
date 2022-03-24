import * as L from "./listBoard.styles";

const ListBoard = () => {
  return (
    <L.Wrapper>
      <L.Category style={{ backgroundColor: "#EB5E55" }}>영화</L.Category>
      <L.Category style={{ backgroundColor: "#5299D3" }}>드라마</L.Category>
      <L.Category style={{ backgroundColor: "#FFBA08" }}>만화</L.Category>
      <L.Category style={{ backgroundColor: "#EEF0F2" }}>책</L.Category>
      <L.Category style={{ backgroundColor: "#1C3144", color: "#ffffff" }}>
        기타
      </L.Category>
      {/* 클릭했을 때, 해당 화면이 넓어지면서 등록하는 화면 나타내기 */}
    </L.Wrapper>
  );
};

export default ListBoard;

// D00000 FFBA08 A2AEBB 3F88C5 1C3144
// 00A6A6 FFBA08 606C38 CDC7E5 1C3144
