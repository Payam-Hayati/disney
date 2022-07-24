import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <FormContent>
        <form action="">
          <h2>Contact</h2>
          <hr />
          <p>
            Submit the form below or shoot me an email - payam.hayati@yahoo.com
          </p>

          <input className="" type="text" placeholder="Name" name="name" />
          <br />
          <input className="" type="email" placeholder="Email" name="Email" />
          <br />
          <textarea
            className=""
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <br />
          <button>Let's Collaborate</button>
        </form>
      </FormContent>
    </Container>
  );
};

export default Login;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  background-image: url("/images/login-background.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
`;

const FormContent = styled.div`
  margin: 0 auto;
  text-align: center;
  line-height: 30px;

  input,
  textarea {
    border-radius: 5px;
    border: none;
    padding: 10px 20px 10px 20px;
    margin-top: 5px;
    min-width: 300px;
  }

  button {
    border: solid 1px white;
    background: transparent;
    color: white;
    border-radius: 5px;
    padding: 10px 20px 10px 20px;
    cursor: pointer;
    transition-duration: 250ms;
    focus: none;

    &:hover {
      background: #090b13;
    }
  }
`;
