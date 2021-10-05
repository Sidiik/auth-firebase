import React from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";

export const SignIn = () => {
  return (
    <div
      className="container  w-50 "
      style={{ height: "100vh", margin: "auto", marginTop: "2rem" }}
    >
      <Card className="p-3">
        <h2 className="text-center ">Sign in</h2>
        <Card.Body>
          <Form>
            <Form.Group id="email">
              <Form.Label htmlFor="email">Email address</Form.Label>
              <Form.Control type="email" id="email" />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control type="password" id="password" />
            </Form.Group>
            <Form.Group id="confPass">
              <Form.Label>Password confiramation</Form.Label>
              <Form.Control type="password" id="email" />
            </Form.Group>
            <Button type="submit" className="w-100 mt-2">
              Log in
            </Button>
          </Form>
        </Card.Body>
      </Card>
      Need an account ? Create one.
    </div>
  );
};
