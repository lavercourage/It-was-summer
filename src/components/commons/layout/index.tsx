import styled from "@emotion/styled";
import LayoutHeader from "./header/layoutHeader.container";

const Body = styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
`;

const Layout = (props: any) => {
  return (
    <div style={{ width: "100%" }}>
      <LayoutHeader />
      <Body>{props.children}</Body>
    </div>
  );
};

export default Layout;
