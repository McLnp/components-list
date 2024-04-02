import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentField from "./ContentField";
import TextField from "./TextField";
import TextareaField from "./TextareaField";
import CtaField from "./Cta";
import Tags from "./Tags";
import Images from "./Images";
import CarouselImg from "./CarouselImg";
import GridImg from "./gridImg";
import FormField from "./FormField";
// backend connect
import supabase from "../config/SupabaseClient";
import Button from "./Button";

export const Form = () => {
  const [value, setValue] = useState({
    title: "",
    description: "",
    prelude: "",
    heading: "",
    contentItems: [{ heading: "", text: "", icon: "", column: "" }],
    section: "",
    ctaItems: [{ text: "", link: "", icon: "" }],
    form: {
      fields: [
        {
          type: "",
          label: "",
          icon: "",
          placeholder: "",
        },
      ],
    },
    previewUrl: "",
    backgroundImg: "",
    images: [{ alt: "", src: "", position: "" }],
    carouselImages: [""],
    gridImages: [""],
    tagItems: [""],
    textPosition: "",
    imagePosition: "",
  });

  const navigate = useNavigate();

  const handleTitleChange =
    (valueProp = "") =>
    (event) => {
      setValue({
        ...value,
        [valueProp]: event.target.value,
      });
    };

  const addComponent = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("components")
      .insert({ title: value.title, description: value.description })
      .select();

    if (error) {
      console.log(error);
    }

    if (data) {
      console.log(data);
      navigate("/");
    }
  };

  return (
    <div className="form-wrapper w-full min-h-lvh flex items-center justify-center py-24">
      <form
        action=""
        className="flex flex-col max-w-3xl p-8 gap-5 w-full border border-accent rounded-xl shadow-md"
        onSubmit={addComponent}
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
        <TextField
          label="Section"
          name="section"
          id="section"
          value={value.section}
          onChange={handleTitleChange("section")}
        />
        <hr />
        <CtaField initialValue={value} changeCallback={setValue} />
        <hr />

        <TextField
          label="Preview Url"
          name="preview-url"
          id="preview-url"
          value={value.previewUrl}
          onChange={handleTitleChange("previewUrl")}
        />
        <TextField
          label="Background Image"
          name="background-img"
          id="background-img"
          value={value.backgroundImg}
          onChange={handleTitleChange("backgroundImg")}
        />
        <hr />
        <Images initialValue={value} changeCallback={setValue} />
        <hr />
        <CarouselImg initialValue={value} changeCallback={setValue} />
        <hr />
        <GridImg initialValue={value} changeCallback={setValue} />
        <hr />
        <Tags initialValue={value} changeCallback={setValue} />
        <hr />
        <TextField
          label="Text Position"
          name="text-position"
          id="text-position"
          value={value.textPosition}
          onChange={handleTitleChange("textPosition")}
        />
        <TextField
          label="Image Position"
          name="image-position"
          id="image-position"
          value={value.imagePosition}
          onChange={handleTitleChange("imagePosition")}
        />
        <hr />
        <FormField initialValue={value} changeCallback={setValue} />

        <Button type="" btnText={"Add Component"} />
      </form>
    </div>
  );
};

export default Form;
