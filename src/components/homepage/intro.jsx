import React from "react";
import styled from "styled-components";

const IntroC = styled.div`
  position: absolute;
  /* min-width: 80vw; */
  max-width: 1366px;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  & h1 {
    font-size: 40px;
  }
  & h2 {
    font-size: 18px;
  }

  @media screen and (max-width: 600px) {
    & h1 {
      font-size: 30px;
    }
    & h2 {
      font-size: 15px;
    }
  }
`;

const HomePage = (props) => {
  return (
    <IntroC>
      <h1>I only know two things: cat and bird.</h1>
      <h2>
        If you give me a photo with cat or bird, I can tell you which one is
        that.
      </h2>
    </IntroC>
  );
};

export default HomePage;
