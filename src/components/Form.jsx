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

  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading((prevState) => !prevState);

    const { data, error } = await supabase
      .from("components")
      .insert({
        title: value.title,
        description: value.description,
        prelude: value.prelude,
        heading: value.heading,
        section: value.section,
        preview_url: value.previewUrl,
        background_img: value.backgroundImg,
        text_position: value.textPosition,
        image_position: value.imagePosition,
      })
      .select();

    const component_id = data[0].id;
    const componentContentArr = value.contentItems.map((item) => {
      return {
        components_id: component_id,
        content_heading: item.heading,
        content_text: item.text,
        content_icon: item.icon,
        content_column: item.column,
      };
    });

    const componentCtaArr = value.ctaItems.map((item) => {
      return {
        components_id: component_id,
        cta_text: item.text,
        cta_link: item.link,
        cta_icon: item.icon,
      };
    });

    const componentFormFieldArr = value.form.fields.map((item) => {
      return {
        components_id: component_id,
        component_field_type: item.type,
        component_field_label: item.label,
        component_field_icon: item.icon,
        component_field_placeholder: item.placeholder,
      };
    });

    const componentTagArr = value.tagItems.map((item) => {
      return {
        components_id: component_id,
        component_tags: item,
      };
    });

    const componentImageArr = value.images.map((item) => {
      return {
        components_id: component_id,
        component_images_alt: item.alt,
        component_images_src: item.src,
        component_images_position: item.position,
      };
    });

    const componentCarouselImageArr = value.carouselImages.map((item) => {
      return {
        components_id: component_id,
        component_carousel_img: item,
      };
    });

    const componentGridImageArr = value.gridImages.map((item) => {
      return {
        components_id: component_id,
        component_grid_images: item,
      };
    });

    const { data: componentContentItems, error: componentContentError } =
      await supabase
        .from("components_contentItems")
        .insert(componentContentArr)
        .select();

    const { data: componentCtaItems, error: componentCtaError } = await supabase
      .from("components_ctaItems")
      .insert(componentCtaArr)
      .select();

    const { data: componentFormFieldItems, error: componentFormFieldError } =
      await supabase
        .from("components_formFields")
        .insert(componentFormFieldArr)
        .select();

    const { data: componentTagItems, error: componentTagError } = await supabase
      .from("components_tagItems")
      .insert(componentTagArr)
      .select();

    const { data: componentImageItems, error: componentImagesError } =
      await supabase
        .from("components_images")
        .insert(componentImageArr)
        .select();

    const {
      data: componentCarouselImageItems,
      error: componentCarouselImageError,
    } = await supabase
      .from("components_carouselImages")
      .insert(componentCarouselImageArr)
      .select();

    const { data: componentGridImageItems, error: componentGridImageError } =
      await supabase
        .from("components_gridImages")
        .insert(componentGridImageArr)
        .select();

    if (
      error &&
      componentContentError &&
      componentCtaError &&
      componentTagError &&
      componentFormFieldError &&
      componentImagesError &&
      componentCarouselImageError &&
      componentGridImageError
    ) {
      console.log({
        error,
        componentContentError,
        componentCtaError,
        componentTagError,
        componentFormFieldError,
        componentImagesError,
        componentCarouselImageError,
        componentGridImageError,
      });
    }

    if (
      data &&
      componentContentItems &&
      componentCtaItems &&
      componentTagItems &&
      componentFormFieldItems &&
      componentImageItems &&
      componentCarouselImageItems &&
      componentGridImageItems
    ) {
      console.log({
        data,
        componentContentItems,
        componentCtaItems,
        componentTagItems,
        componentFormFieldItems,
        componentImageItems,
        componentCarouselImageItems,
        componentGridImageItems,
      });
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
        <h2 className={isLoading ? "block" : "hidden"}>
          Adding Component Please Wait...
        </h2>
      </form>
    </div>
  );
};

export default Form;
