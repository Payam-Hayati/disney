import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  background-image: url("/images/home-background.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  background-attachment: fixed;
  overflow:hidden;
`;
