import React, { useState } from "react";
import Button from "./Button";
import TextField from "./TextField";

function Images({ initialValue = { images: [] }, changeCallback }) {
  if (!initialValue.images) return <></>;

  const [imagesItems, setImagesItem] = useState(initialValue.images);

  function addImages() {
    setImagesItem([...imagesItems, { alt: "", src: "", position: "" }]);
  }

  function handleImagesChange(field, imgIndex, value) {
    const updatedImagesValue = imagesItems.map((img, index) => {
      if (index === imgIndex) {
        return { ...img, [field]: value };
      }
      return img;
    });

    setImagesItem(updatedImagesValue);
    changeCallback({ ...initialValue, images: updatedImagesValue });
  }

  return (
    <div className="cta-array-wrapper flex flex-col gap-3 py-4">
      {imagesItems.map((img, index) => (
        <fieldset
          className="flex flex-col gap-3 py-4"
          key={index + 1}
          id={`image-${index + 1}`}
        >
          <legend>Images Item {index + 1}</legend>
          <TextField
            label={`Alt ${index + 1}`}
            name={`alt-${index + 1}`}
            id={`alt-${index + 1}`}
            value={img.alt}
            onChange={(e) => handleImagesChange("alt", index, e.target.value)}
          />
          <TextField
            label={`Src ${index + 1}`}
            name={`src-${index + 1}`}
            id={`src-${index + 1}`}
            value={img.src}
            onChange={(e) => handleImagesChange("src", index, e.target.value)}
          />
          <TextField
            label={`Position ${index + 1}`}
            name={`postion-${index + 1}`}
            id={`postion-${index + 1}`}
            value={img.position}
            onChange={(e) =>
              handleImagesChange("position", index, e.target.value)
            }
          />
        </fieldset>
      ))}
      <Button btnText={"Add Images"} onClick={addImages} />
    </div>
  );
}

export default Images;
