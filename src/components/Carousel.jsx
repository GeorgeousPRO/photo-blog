import React, { useState, useContext, useEffect } from "react";
import { Carousel } from "react-bootstrap/";
import ImageContext from "../context/ImageProvider";

export default function CarouselImage(props) {
  const [index, setIndex] = useState(0);
  const { images } = useContext(ImageContext);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const filterImages = (group) => {
    return [...images].filter((imageObj) => imageObj.group === group);
  };
  useEffect(() => {
    setIndex(0);
  }, [props]);

  return (
    <>
      {/* {console.log(props.group)} */}
      <p>{props.group} </p>
      <Carousel
        key={props.group}
        // pause="hover"
        className="mt-3"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {filterImages(props.group).length &&
          filterImages(props.group)[0].photos.map((img) => {
            return (
              <Carousel.Item key={img.url}>
                <img
                  className="d-block w-100"
                  src={img.url}
                  alt="Third slide"
                />

                <Carousel.Caption className="caption">
                  <h3>
                    <span
                      style={{
                        color: "cyan",
                        backgroundColor: "rgb(1,1,1,0.4)",
                      }}
                    >
                      {img.title}{" "}
                    </span>
                  </h3>
                  <span
                    style={{
                      color: "cyan",
                      backgroundColor: "rgb(1,1,1,0.4)",
                    }}
                  >
                    {img.body}
                  </span>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        {/* {console.log(filterImages(props.group)[0].photos)} */}
      </Carousel>
    </>
  );
}
