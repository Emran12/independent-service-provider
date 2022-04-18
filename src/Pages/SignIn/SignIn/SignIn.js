import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";

import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SignIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigateSignUp = (event) => {
    navigate("/register");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-info text-center mt-2">Please Sign In</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="info w-50 mx-auto d-block mb-2" type="submit">
          Sign in
        </Button>
      </Form>
      <p>
        New with Dr. Sumon C.P.S?
        <Link
          to="/signup"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateSignUp}
        >
          Please Sign Up
        </Link>{" "}
      </p>
    </div>
  );
};

export default SignIn;
