import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  height: 120px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #6a7a8e;
  color: #e7e7e7;
`;

export const Main = styled.main`
  position: relative;
  /* height: 84vh; */
  overflow-y: auto;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
`;

export const LAYOUT = {
  extraSmall: {
    margin: "16px",
    body: "auto",
  },
  small_1: {
    minSize: "600px",
    margin: "32px",
    body: "auto",
  },
  small_2: {
    minSize: "905px",
    margin: "auto",
    body: "840px",
  },
  medium: {
    minSize: "1240px",
    margin: "200px",
    body: "auto",
  },
  large: {
    minSize: "1440px",
    margin: "auto",
    body: "1040px",
  },
};
