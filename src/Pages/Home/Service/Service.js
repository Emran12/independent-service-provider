import React from "react";
import { Button, Card } from "react-bootstrap";

const Service = ({ service }) => {
  const { title, img, description } = service;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Title
          className="text-info
        "
        >
          {title}
        </Card.Title>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
