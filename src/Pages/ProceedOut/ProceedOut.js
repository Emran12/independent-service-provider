import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const ProceedOut = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  if (loading) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  const handleSubmit = () => {
    navigate("/greetings");
  };
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 bg-gray">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder={user.displayName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone Number </Form.Label>
          <Form.Control type="tel" placeholder="Phone Number" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="email adderess" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button onClick={handleSubmit} variant="info" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ProceedOut;
