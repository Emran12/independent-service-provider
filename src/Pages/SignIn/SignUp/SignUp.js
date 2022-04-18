import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../SignUp/SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const navigateSignin = () => {
    navigate("/signin");
  };

  const handleSignUP = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    navigate("/home");
  };
  return (
    <div className="signup-form">
      <h1 className="text-center text-info">Please Sign Up</h1>
      <form onSubmit={handleSignUP}>
        <input type="text" name="name" id="" placeholder="Enter your name" />

        <input
          type="email"
          name="email"
          id=""
          placeholder="Enter your email address"
          required
        />

        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />

        <input
          className="w-50 mx-auto btn btn-info mt-2"
          type="submit"
          value="Sign up"
        />
      </form>
      <p>
        Already have an account?
        <Link
          to="/signin"
          className="text-info pe-auto text-decoration-none"
          onClick={navigateSignin}
        >
          Please Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
