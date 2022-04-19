import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { title, img, description } = service;
  const navigate = useNavigate();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Title
          className="bg-info text-white
        "
        >
          {title}
        </Card.Title>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Text>{description}</Card.Text>
          <Button
            onClick={() => {
              navigate("/proceedout");
            }}
            variant="info"
          >
            Schedule an Appointment
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
