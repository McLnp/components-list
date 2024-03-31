import React, { useState } from "react";
import TextField from "./TextField";
import Button from "./Button";

function GridImg({ initialValue = { gridImages: [] }, changeCallback }) {
  const [gridImgs, setGridImgs] = useState(initialValue.gridImages);

  function addCarouselImg() {
    setGridImgs([...gridImgs, ""]);
  }

  function handleCarouselImgChange(carouselImgIndex, value) {
    const updatedCarouselImg = gridImgs.map((gridImg, index) => {
      if (index === carouselImgIndex) {
        return value;
      }

      return gridImg;
    });

    setGridImgs(updatedCarouselImg);
    changeCallback({ ...initialValue, gridImages: updatedCarouselImg });
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        {gridImgs.map((gridImg, index) => (
          <TextField
            key={index}
            label={`Grid Img ${index + 1}`}
            id={`grid-img-${index + 1}`}
            name={`grid-img-${index + 1}`}
            value={gridImg} // Correctly pass the tag's value here
            onChange={(e) => handleCarouselImgChange(index, e.target.value)}
          />
        ))}
      </div>
      <Button btnText="Add Grid Image" onClick={addCarouselImg} />
    </>
  );
}

export default GridImg;
