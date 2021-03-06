import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialSignIn from "../SocialSignIn/SocialSignIn";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();

  if (loading) {
    return <Loading></Loading>;
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  if (user) {
    console.log(user);
    navigate("/home");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="w-50 mx-auto mt-5">
      <h1 className="text-success">Please Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            onBlur={handleEmail}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            onBlur={handlePassword}
            required
          />
        </Form.Group>
        <Button
          className="mt-2 mb-2 rounded-pill w-75 p-2 bg-success text-light fs-2 border-info "
          variant="success"
          type="submit"
        >
          Sign up
        </Button>
      </Form>

      <p>
        Already have an account?
        <Link to="/signin" className="text-decoration-none">
          Sign in
        </Link>
      </p>
      <SocialSignIn></SocialSignIn>
    </div>
  );
};

export default SignUp;
