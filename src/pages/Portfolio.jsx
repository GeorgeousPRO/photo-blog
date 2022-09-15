import React, { useState, useContext, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ImageContext from "../context/ImageProvider";
import CarouselImage from "../components/Carousel";
import { Container, Button, Col, Row } from "react-bootstrap/";

export default function Portfolio() {
  const [group, setGroup] = useState("");
  const { images } = useContext(ImageContext);

  const handleGroupClick = (e) => {
    // console.log(e.target.textContent);
    const allGroups = e.target.parentNode.children;
    [...allGroups].forEach((element) => {
      element.classList.remove("active");
    });
    console.log();
    e.target.classList.add("active");
    setGroup(e.target.textContent);
  };

  return (
    <Container>
      <Row>
        <Col md={2}>
          <Row className="mt-5">
            {images.map((image) => (
              <Button
                key={image.group}
                className="mt-1"
                variant="outline-secondary"
                onClick={handleGroupClick}
              >
                {image.group}
              </Button>
            ))}
          </Row>
          {/* {console.log("images", images)} */}
        </Col>
        <Col>
          <CarouselImage group={group} />
        </Col>
      </Row>
    </Container>
  );
}
