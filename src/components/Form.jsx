import React, { useEffect, useState } from "react";
import ContentField from "./ContentField";
import TextField from "./TextField";
import TextareaField from "./TextareaField";

export const Form = () => {
  const [value, setValue] = useState({
    title: "",
    description: "",
    prelude: "",
    heading: "",
    contentItems: [{ heading: "", text: "", icon: "", column: "" }],
  });

  const handleTitleChange =
    (valueProp = "") =>
    (event) => {
      setValue({
        ...value,
        [valueProp]: event.target.value,
      });
    };

  return (
    <div className="form-wrapper w-full min-h-lvh flex items-center justify-center py-24">
      {/* {JSON.stringify(value)} */}
      <form
        action=""
        className="flex flex-col max-w-3xl p-8 gap-5 w-full border border-accent rounded-xl shadow-md"
      >
        <TextField
          label="Title"
          name="title"
          id="title"
          value={value.title}
          onChange={handleTitleChange("title")}
        />
        <TextareaField
          label="Description"
          name="description"
          id="description"
          value={value.description}
          onChange={handleTitleChange("description")}
        />
        <TextField
          label="Prelude"
          name="prelude"
          id="prelude"
          value={value.prelude}
          onChange={handleTitleChange("prelude")}
        />
        <TextField
          label="Heading"
          name="heading"
          id="heading"
          value={value.heading}
          onChange={handleTitleChange("heading")}
        />
        <hr />
        <ContentField initialValue={value} changeCallback={setValue} />
        <hr />
      </form>
    </div>
  );
};

export default Form;
