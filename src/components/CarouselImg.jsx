import React, { useState } from "react";
import TextField from "./TextField";
import Button from "./Button";

function CarouselImg({
  initialValue = { carouselImages: [] },
  changeCallback,
}) {
  const [carouselImgs, setCarouselImgs] = useState(initialValue.carouselImages);

  function addCarouselImg() {
    setCarouselImgs([...carouselImgs, ""]);
  }

  function handleCarouselImgChange(carouselImgIndex, value) {
    const updatedCarouselImg = carouselImgs.map((carouselImg, index) => {
      if (index === carouselImgIndex) {
        return value;
      }

      return carouselImg;
    });

    setCarouselImgs(updatedCarouselImg);
    changeCallback({ ...initialValue, carouselImages: updatedCarouselImg });
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        {carouselImgs.map((carouselImg, index) => (
          <TextField
            key={index}
            label={`Carousel Img ${index + 1}`}
            id={`carousel-img-${index + 1}`}
            name={`carousel-img-${index + 1}`}
            value={carouselImg} // Correctly pass the tag's value here
            onChange={(e) => handleCarouselImgChange(index, e.target.value)}
          />
        ))}
      </div>
      <Button btnText="Add Carousel Image" onClick={addCarouselImg} />
    </>
  );
}

export default CarouselImg;
