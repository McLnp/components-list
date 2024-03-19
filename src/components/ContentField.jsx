import React, { useState } from "react";
import TextField from "./TextField";
import Button from "./Button";

function ContentField({ initialValue = { contentItems: [] }, changeCallback }) {
  const [contents, setContents] = useState(initialValue.contentItems);

  const addContentField = () => {
    setContents([...contents, { heading: "", text: "", icon: "", column: "" }]);
  };

  const handleContentChange = (field, index, value) => {
    const updatedContents = contents.map((content, contentIndex) => {
      if (index === contentIndex) {
        return { ...content, [field]: value };
      }
      return content;
    });
    setContents(updatedContents);
    changeCallback({ ...initialValue, contentItems: updatedContents });
  };

  return (
    <div className="content-array-wrapper flex flex-col gap-3 py-4">
      {contents.map((content, contentIndex) => (
        <fieldset
          key={`fieldset-${contentIndex + 1}`}
          className="flex flex-col gap-3 py-4"
          id={`fieldset-${contentIndex + 1}`}
        >
          <legend>Content Item {contentIndex + 1}</legend>
          <TextField
            label={`Content Heading ${contentIndex + 1}`}
            name={`content-heading-${contentIndex + 1}`}
            id={`content-heading-${contentIndex + 1}`}
            value={content.heading}
            onChange={(e) =>
              handleContentChange("heading", contentIndex, e.target.value)
            }
          />
          <TextField
            label={`Content Text ${contentIndex + 1}`}
            name={`content-text-${contentIndex + 1}`}
            id={`content-text-${contentIndex + 1}`}
            value={content.text}
            onChange={(e) =>
              handleContentChange("text", contentIndex, e.target.value)
            }
          />
          <TextField
            label={`Content Icon ${contentIndex + 1}`}
            name={`content-icon-${contentIndex + 1}`}
            id={`content-icon-${contentIndex + 1}`}
            value={content.icon}
            onChange={(e) =>
              handleContentChange("icon", contentIndex, e.target.value)
            }
          />
          <TextField
            label={`Content Column ${contentIndex + 1}`}
            name={`content-column-${contentIndex + 1}`}
            id={`content-column-${contentIndex + 1}`}
            value={content.column}
            onChange={(e) =>
              handleContentChange("column", contentIndex, e.target.value)
            }
          />
        </fieldset>
      ))}

      <Button onClick={addContentField} />
    </div>
  );
}

export default ContentField;
