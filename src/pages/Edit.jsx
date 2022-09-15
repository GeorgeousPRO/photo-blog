import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import ImageContext from "../context/ImageProvider";
import Card from "../components/Card";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
const Current = () => {
  const [group, setGroup] = useState("");

  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const { images, setImages } = useContext(ImageContext);
  const [selectedImage, setSelectedImage] = useState([]);
  useEffect(() => {
    console.log(auth);
    if (!auth.loggedIn) {
      navigate("/");
    }
  });

  const handleImageSave = () => {
    console.log("selectedImage", selectedImage);
    console.log("images", images);
    console.log([...images, ...selectedImage]);
    setImages([...images, ...selectedImage]);
  };
  const handleSaveCard = (e) => {
    e.preventDefault();
    console.log(e.target.closest(".form").firstChild.firstChild.value);
    const src = e.target.closest(".card").firstChild.src;
    const title = e.target.closest(".form").firstChild.firstChild.value;
    const body =
      e.target.closest(".form").firstChild.nextSibling.firstChild.value;
    images.forEach((image) => {
      console.log(image.title);
      console.log(title);
      if (image.url === src) {
        console.log("inside");
        image.title = title;
        image.body = body;
      }
    });
  };
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
  // const handleTitleChange = (e) => {
  //   image.title = e.target.value;
  // };
  return (
    <>
      <h2 className="text-center mt-4 mb-4">View all photos</h2>
      <Container>
        <Row>
          <Col sm={6} md={6} lg={4} xl={2}>
            <Row className="mt-1">
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
          </Col>
          {images?.length &&
            images.map((image) => {
              return (
                <Col key={image.url} sm={12} md={6} lg={4} fluid>
                  <Card />
                </Col>
              );
            })}
        </Row>
        <br />

        <br />
        <Button variant="outline-success" onClick={handleImageSave}>
          Save Photos
        </Button>
      </Container>
    </>
  );
};

export default Current;
