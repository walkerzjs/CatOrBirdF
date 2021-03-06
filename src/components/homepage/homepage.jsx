import React from "react";
import styled from "styled-components";
import Upload from "./upload/upload";
import Header from "./header";
import Intro from "./intro";
import Footer from "./footer";

const HomePageC = styled.div`
  position: relative;
  height: 100vh;
  min-height: 1200px;
  width: 100%;
  /* https://pixabay.com/photos/curious-cat-bird-watching-danger-4766017/ */
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
    url("/background_homepage.jpg");
  background-size: cover;
  color: white;
`;

const HomePage = (props) => {
  return (
    <HomePageC>
      <Header />
      <Intro />
      <Upload />
      <Footer />
    </HomePageC>
  );
};

export default HomePage;
