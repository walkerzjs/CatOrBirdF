import React from "react";
import styled from "styled-components";

const FooterC = styled.div`
  & span {
    font-size: 18px;
    & a {
      color: white;
    }
  }
  position: absolute;
  left: 50px;
  bottom: 20px;
`;

const Footer = (props) => {
  return (
    <FooterC>
      <span>
        2020, By{" "}
        <a
          href="https://www.linkedin.com/in/junshuai-zhang-jacob-55774594/"
          target="__blank"
        >
          Jacob Zhang
        </a>
      </span>
    </FooterC>
  );
};

export default Footer;
