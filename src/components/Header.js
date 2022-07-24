import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo src="images/logo.svg" alt="logo" />
      <NavMenu>
        <a href="/">
          <img src="images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>

        <a href="/">
          <img src="images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>

        <a href="/">
          <img src="images/watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </a>

        <a href="/">
          <img src="images/original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </a>

        <a href="/">
          <img src="images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>

        <a href="/login">
          <img src="images/series-icon.svg" alt="" />
          <span>Contact</span>
        </a>
      </NavMenu>
      <a href="/login">
        <UserImg src="https://avatars.githubusercontent.com/u/89186898?v=4" />
      </a>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 360;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
  padding-left: 15px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      transition: all 1s ease-in-out;
      -webkit-transition: all 1s ease-in-out;

      &:hover {
        border-bottom: 1px solid white;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 15px;
`;
