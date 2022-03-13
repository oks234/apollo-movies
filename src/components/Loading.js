import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Loading = ({ type, color, size }) => (
  <Container>
    <ReactLoading
      type={type || "balls"}
      color={color || "#000000"}
      height={size || 40}
      width={size || 40}
    />
  </Container>
);

export default Loading;
