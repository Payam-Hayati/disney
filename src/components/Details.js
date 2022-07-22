import React from "react";
import styled from "styled-components";

const Details = () => {
  return (
    <Container>
      <Background>
        <img src="images/animation/back-anim-1.jpg" alt="" />
      </Background>
      <ImageTitle>
        <img src="images/animation/title.png" alt="" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="images/animation/play.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="images/animation/trailer.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="images/animation/group.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <Subtitle>2020 - 7m - Family, Fantasy, Kids, Animation</Subtitle>
      <Description>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
      </Description>
    </Container>
  );
};

export default Details;

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw+5px);
  position: reltive;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 300px;
  margin: 60px 0 0 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: containt;
  }
`;

const Controls = styled.div`
  display: flex;
  padding: 10px;
  margin: 0px 0 0 50px;
  align-items: center;
`;

const PlayButton = styled.div`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;
  background: white;
  color: black;
  width: 105px;
  justify-content: center;

  img {
    width: 32px;
    height: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled.div`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-left: 0px;
  display: flex;
  align-items: center;
  height: 56px;
  border: solid 1px rgb(249, 249, 249);
  letter-spacing: 1.8px;
  cursor: pointer;
  background: #242425;
  color: white;
  width: 120px;
  justify-content: center;

  img {
    width: 32px;
    height: 32px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
const AddButton = styled.div`
  margin-left: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: solid 2px white;
  background-color: rgb(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
    margin-top: -5px;
  }
`;

const GroupWatchButton = styled.div`
  margin-left: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: solid 2px white;
  background-color: #000;
  cursor: pointer;

  img {
    width: 24px;
    height: 18px;
  }
`;

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
  margin-left: 60px;
`;

const Description = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 10px;
  margin-left: 60px;
  max-width: 500px;
  line-height:1.4;
`;
