import React, { useState } from "react";
import TextField from "./TextField";
import Button from "./Button";

function Tags({ initialValue = { tagItems: [] }, changeCallback }) {
  const [tags, setTags] = useState(initialValue.tagItems);

  function addTags() {
    setTags([...tags, ""]);
  }

  function handleTagChange(tagIndex, event) {
    // Create a new array with all tags, updating the value of the tag at tagIndex
    const updatedTags = tags.map((tag, index) => {
      if (index === tagIndex) {
        return event.target.value; // Update this tag's value
      }
      return tag; // Leave all other tags unchanged
    });

    setTags(updatedTags); // Set the updated tags array as the new state
    changeCallback({ ...initialValue, tagItems: updatedTags });
  }

  return (
    <>
      <fieldset className="flex flex-col gap-4">
        {tags.map((tag, tagIndex) => (
          <div key={tagIndex}>
            <TextField
              label={`Tag ${tagIndex + 1}`}
              id={`tag-${tagIndex + 1}`}
              name={`tag-${tagIndex + 1}`}
              value={tag} // Correctly pass the tag's value here
              onChange={(e) => handleTagChange(tagIndex, e)}
            />
          </div>
        ))}
      </fieldset>
      <Button btnText="Add Tag" onClick={addTags} />
    </>
  );
}

export default Tags;
