import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialSignIn from "../SocialSignIn/SocialSignIn";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }
  if (loading || sending) {
    return <Loading></Loading>;
  }
  const resetPassword = async () => {
    if (email) {
      console.log(email);
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  return (
    <div className="w-50 mx-auto mt-5">
      <h1 className="text-success">Please Sign in</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            autoFocus
            off
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
          Sign in
        </Button>
      </Form>
      <p className="font-bold">
        New with DR. SUMON CPS?
        <Link to="/signup" className="text-decoration-none">
          Sign up
        </Link>
      </p>
      <p>
        Forget Password?
        <button
          onClick={resetPassword}
          className="btn btn-link text-info pe-auto text-decoration-none"
        >
          Reset Password
        </button>
      </p>
      <SocialSignIn></SocialSignIn>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SignIn;
