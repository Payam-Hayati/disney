import React from "react";
import styled from "styled-components";

const Movies = () => {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <a href="/details">
            <img src="images/animation/anim-1.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="/details">
            <img src="images/animation/anim-2.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="/details">
            <img src="images/animation/anim-3.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="/details">
            <img src="images/animation/anim-4.jpg" alt="" />
          </a>
        </Wrap>
        {/* Start Row-2 */}
        <Wrap>
          <a href="/details">
            <img src="images/animation/anim-4.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="/details">
            <img src="images/animation/anim-3.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="/details">
            <img src="images/animation/anim-2.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="/details">
            <img src="images/animation/anim-1.jpg" alt="" />
          </a>
        </Wrap>
        <br /> <br />
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: solid 3px rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
