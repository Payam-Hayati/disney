import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Boxes>
        <div class="parent">
          <div class="child">
            <span>Products</span>
            <ul>
              <li>Privacy Policy Generator</li>
              <li>Terms & Conditions Generator</li>
              <li>Cookies Policy Generator</li>
              <li>Return & Refund Policy Generator</li>
              <li>EULA Generator</li>
              <li>Disclaimer Generator</li>
              <li>Terms of Service Generator</li>
              <li>Terms of Use Generator</li>
            </ul>
          </div>
          <div class="child">
            <span>Products</span>
            <ul>
              <li>Privacy Policy Generator</li>
              <li>Terms & Conditions Generator</li>
              <li>Cookies Policy Generator</li>
              <li>Return & Refund Policy Generator</li>
              <li>EULA Generator</li>
              <li>Disclaimer Generator</li>
              <li>Terms of Service Generator</li>
              <li>Terms of Use Generator</li>
            </ul>
          </div>
          <div class="child">
            <span>Products</span>
            <ul>
              <li>Privacy Policy Generator</li>
              <li>Terms & Conditions Generator</li>
              <li>Cookies Policy Generator</li>
              <li>Return & Refund Policy Generator</li>
              <li>EULA Generator</li>
              <li>Disclaimer Generator</li>
              <li>Terms of Service Generator</li>
              <li>Terms of Use Generator</li>
            </ul>
          </div>
          <div class="child">
            <span>Products</span>
            <ul>
              <li>Privacy Policy Generator</li>
              <li>Terms & Conditions Generator</li>
              <li>Cookies Policy Generator</li>
              <li>Return & Refund Policy Generator</li>
              <li>EULA Generator</li>
              <li>Disclaimer Generator</li>
              <li>Terms of Service Generator</li>
              <li>Terms of Use Generator</li>
            </ul>
          </div>
        </div>
      </Boxes>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  height: 250px;
  background: #090b13;
  padding: 30px 0 0 0;
  margin: 0 auto;
  text-align: center;
`;

const Boxes = styled.div`
  .parent {
    display: flex;
    flex-wrap: wrap;
  }

  .child {
    flex: 1 0 21%; /* explanation below */
    margin: 5px;
    height: auto;
    text-align: left;

    padding: 20px;
    line-height: 1.8;

    span {
      font-weight: bold;
    }

    ul {
      list-style-type: none;
      padding-left: 10px;

      li:hover {
        color: #007acc;
        cursor: pointer;
      }
    }
  }
`;
