import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  object-fit: cover;
  height: 100vh;
  width: 100vw;
`;

const Title = styled.h1`
  color: #dc0000;
  font-family: sans-serif;
  text-align: center;
  font-size: 4rem;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

export default function UserForm() {
  return (
    <Wrapper>
      <Title>SIGNUP BELOW </Title>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.label>Email: </Form.label>
          <Form.Control type="email" placeholder="Enter Your Email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" placeholder="Enter A Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Wrapper>
  );
}
