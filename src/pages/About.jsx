import React from "react";
import "../App.css";

import { Link } from "react-router-dom";
import { Container, Button, Image, Col, Row } from "react-bootstrap/";

export default function About() {
  const handleViewPortfolioClick = () => {};

  return (
    <Container fluid="md">
      <Row className="p-4 mt-5 bg-light text-dark">
        <Col sm={7} md={6} lg={5} xl={4}>
          <Image
            className="mt-3 img-fluid"
            src="https://dummyimage.com/350x500/074/fff"
          />
        </Col>
        <Col>
          <div className="mt-4">
            <div className="d-flex justify-content-end">
              <h1>Name Surname</h1>
            </div>
            <div className="about pt-2 mt-3">
              I think this advice might be the most underrated and I rarely hear
              it raised in front-end, typography, or design groups. I’ve even
              noticed seasoned designers struggle to typeset a page because
              Lorem Ipsum is used for the placeholder content, which makes it
              impossible for to gauge whether a paragraph of text is easy to
              read or not.
            </div>
            <Link to="/portfolio">
              <Button variant="outline-info">View Portfolio</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
