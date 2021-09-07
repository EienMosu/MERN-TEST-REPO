import React from "react";
import {
  Button,
  Container,
  Form,
  Input,
  Link,
  Title,
  Wrapper,
} from "./Login.styles";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>LOGIN</Button>
          <Link>DO YOU NOT REMEMBER THE PASSWORD?</Link>
          <Link>CREATE AN ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
