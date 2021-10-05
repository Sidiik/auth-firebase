import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form, InputGroup } from "react-bootstrap";
import { useAuth } from "../contexts/Auth-state";

export const SignUp = () => {
  const [error, setError] = useState();
  const { signup } = useAuth();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPass = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPass.current.value) {
      setError("Passwords must much");
      return;
    }
    if (emailRef.current.value.trim().length == 0) {
      setError("Email must be provided");
      return;
    }
    try {
      setError("");
      signup(emailRef.current.value, passwordRef.current.value);
      return;
    } catch (error) {
      console.log(error);
    }

    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPass.current.value = "";
  };

  return (
    <div
      className="container  w-50 "
      style={{ height: "100vh", margin: "auto", marginTop: "2rem" }}
    >
      <Card className="p-3">
        <h2 className="text-center ">Sign up</h2>
        <Card.Body>
          {error && <Alert variant="danger"> {error} </Alert>}
          <Form onSubmit={submitHandler}>
            <Form.Group id="email">
              <Form.Label htmlFor="email">Email address</Form.Label>
              <Form.Control type="email" ref={emailRef} id="email" />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control ref={passwordRef} type="password" id="password" />
            </Form.Group>
            <Form.Group id="confPass">
              <Form.Label>Password confiramation</Form.Label>
              <Form.Control ref={confirmPass} type="password" id="email" />
            </Form.Group>
            <Button type="submit" className="w-100 mt-2">
              Signup
            </Button>
          </Form>
          Already have an account ? Login
        </Card.Body>
      </Card>
    </div>
  );
};
