import React, { useState, useContext, useEffect } from "react";
import { Card, Form, Image, Button } from "react-bootstrap/";
import ImageContext from "../context/ImageProvider";
const image = {
  url: "https://dummyimage.com/350x500/eee/fff",
};
function CardImage(prop) {
  return (
    <Card
      className="card border-dark bg-light mb-3 mr-3"
      style={{
        width: "100%",
        overflow: "auto",
        height: "25rem",
      }}
    >
      <Card.Img className="p-1" variant="top" src={image.url} />
      <Card.Body>
        <Form className="form">
          <Form.Group className="mb-1">
            <Form.Control
              type="text"
              placeholder={image.title || "No title"}
              autoComplete="off"
            />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Control
              type="text"
              placeholder={image.body || "No description"}
              autoComplete="off"
            />
          </Form.Group>
          <Button variant="outline-primary">Save</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CardImage;
