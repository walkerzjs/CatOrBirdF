import React from "react";
import styled from "styled-components";

const HeaderC = styled.h1`
  position: absolute;
  top: 20px;
  left: 50px;
  font-size: 24px;
`;

const Header = (props) => {
  return <HeaderC>CatOrBird</HeaderC>;
};

export default Header;
