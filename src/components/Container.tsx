import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 480px;
  background: #fff;
  margin: 0 auto;
  height: 100vh;
  outline: solid 1px #000;
  font-family: Calibri, "Trebuchet MS", sans-serif;
`;

function Container({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;
