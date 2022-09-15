import React, { useState, useContext } from "react";
import ImageContext from "../context/ImageProvider";
import Card from "react-bootstrap/Card";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
} from "react-bootstrap";
const UploadAndDisplayImage = () => {
  const { images, setImages } = useContext(ImageContext);
  const [selectedImage, setSelectedImage] = useState([]);

  const handleImageUpload = (e) => {
    console.log("img before", images);

    const tempArr = [];
    console.log(e.target.files[0]);
    [...e.target.files].forEach((file) => {
      console.log("file >>> ", file);

      tempArr.push({
        url: URL.createObjectURL(file),
        title: "",
        body: "",
      });

      console.log("pictures >> ", tempArr);
    });
    console.log(setImages);
    setSelectedImage(tempArr);
    console.log("img after", images);
  };

  const handleImagesSave = () => {
    const group = document.querySelector(".group");
    console.log("selectedImage", selectedImage);
    console.log("images", images);
    console.log("group value", group.value);
    // console.log([...images, ...selectedImage]);
    let exists = false;
    images.forEach((image) => {
      if (image.group === group.value) {
        image.photos = [...image.photos, ...selectedImage];
        exists = true;
      }
    });
    if (!exists && selectedImage.length) {
      images.push({
        group: group.value,
        photos: [...selectedImage],
      });
    }
    // const groupedPhotos = [
    //   {
    //     group: group.value,
    //     photos: [...images, ...selectedImage],
    //   },
    // ];
    console.log("images pushed", images);
    // setImages([...images, ...selectedImage]);
  };
  const handleSaveCard = (e) => {
    e.preventDefault();
    console.log(e.target.closest(".card").firstChild.src);
    const src = e.target.closest(".card").firstChild.src;
    const title = e.target.closest(".form").firstChild.firstChild.value;
    const body =
      e.target.closest(".form").firstChild.nextSibling.firstChild.value;
    selectedImage.forEach((image) => {
      if (image.url === src) {
        image.title = title;
        image.body = body;
      }
    });
  };
  return (
    <>
      <h2 className="text-center mt-4 mb-4">Upload photos</h2>
      <Container>
        <Row xs={1} md={2} lg={3} xl={4}>
          {selectedImage?.length &&
            selectedImage.map((image) => {
              return (
                <Col key={image.url}>
                  <Card
                    className="card border-dark bg-light mb-3 mr-3 h-100"
                    style={{ width: "18rem", overflow: "auto" }}
                  >
                    <Card.Img className="p-1" variant="top" src={image.url} />
                    <Card.Body>
                      <Form className="form">
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Enter title"
                            autoComplete="off"
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Short description"
                            autoComplete="off"
                          />
                        </Form.Group>
                        <Button
                          variant="outline-primary"
                          onClick={handleSaveCard}
                        >
                          Save
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          <br />
        </Row>
        <Row>
          <Col xs={10} md={6} lg={4}>
            <div class="mb-3 mt-3">
              <input
                accept="image/*"
                class="form-control"
                type="file"
                onChange={handleImageUpload}
                id="formFileMultiple"
                multiple
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={8} md={6} lg={5} xl={4}>
            <FloatingLabel
              controlId="floatingInput"
              label="Type existing or new group"
              className="mb-3"
            >
              <Form.Control type="text" className="group" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="outline-success" onClick={handleImagesSave}>
              Save Photos
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UploadAndDisplayImage;
