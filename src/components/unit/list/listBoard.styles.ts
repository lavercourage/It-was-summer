import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Category = styled.div`
  width: 20%;
  height: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const Title = styled.span`
  color: "#222222";
  font-family: "SBAggroL";
  font-size: 1.5rem;
`;

export const Icon = styled.div`
  width: 4rem;
  height: 4rem;
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  background-color: black;
`;
