import React, { createContext, useState } from "react";

const ImageContext = createContext([]);
export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([
    {
      group: "14 Sept 2022",
      photos: [
        {
          url: "https://dummyimage.com/800x400/09e/fff",
          title: "dummy image",
          body: "This image is from the https://dummyimage.com/",
        },
      ],
    },
    {
      group: "15 Sept 2022",
      photos: [
        {
          url: "https://dummyimage.com/800x400/7dc/fff",
          title: "dummy image",
          body: "This image is from the https://dummyimage.com/",
        },
      ],
    },
  ]);
  return (
    <ImageContext.Provider value={{ images, setImages }}>
      {children}
    </ImageContext.Provider>
  );
};
export default ImageContext;
