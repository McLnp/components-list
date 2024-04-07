import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../config/SupabaseClient";
import TextField from "../components/TextField";
import TextareaField from "../components/TextareaField";
import ContentField from "../components/ContentField";
import CtaField from "../components/Cta";
import Images from "../components/Images";
import CarouselImg from "../components/CarouselImg";
import GridImg from "../components/gridImg";
import Tags from "../components/Tags";
import FormField from "../components/FormField";
import Button from "../components/Button";

function Update() {
  const { id: component_id } = useParams();
  const [value, setValue] = useState({});

  useEffect(() => {
    fetchComponent();
  }, [component_id]);

  async function fetchComponent() {
    const { data, error } = await supabase
      .from("components")
      .select(
        "*,components_contentItems(*),components_ctaItems(*),components_tagItems(*),components_formFields(*),components_images(*),components_carouselImages(*),components_gridImages(*)"
      )
      .eq("id", component_id)
      .single();

    if (error) {
      console.log(error);
      return;
    }

    if (data) {
      console.log(data);
      const ctaItems = data.components_ctaItems.map((item) => ({
        text: item.cta_text,
        link: item.cta_link,
        icon: item.cta_icon,
      }));
      const contentItems = data.components_contentItems.map((item) => ({
        heading: item.content_heading,
        text: item.content_text,
        icon: item.content_icon,
        column: item.content_column,
      }));

      const formFields = data.components_formFields.map((item) => ({
        type: item.component_field_type,
        label: item.component_field_label,
        icon: item.component_field_icon,
        placeholder: item.component_field_placeholder,
      }));

      const images = data.components_images.map((item) => ({
        alt: item.component_images_alt,
        src: item.component_images_src,
        position: item.component_images_position,
      }));

      const carouselImages = data.components_carouselImages.map(
        (item) => item.component_carousel_img
      );

      const gridImages = data.components_gridImages.map(
        (item) => item.component_grid_images
      );

      const tagItems = data.components_tagItems.map(
        (item) => item.component_tags
      );

      setValue((prevState) => ({
        ...prevState,
        title: data.title,
        description: data.description,
        prelude: data.prelude,
        heading: data.heading,
        contentItems: contentItems,
        section: data.section,
        ctaItems: ctaItems,
        form: {
          fields: formFields,
        },
        previewUrl: data.preview_url,
        backgroundImg: data.background_img,
        images: images,
        carouselImages: carouselImages,
        gridImages: gridImages,
        tagItems: tagItems,
        textPosition: data.text_position,
        imagePosition: data.image_position,
      }));
    }
  }

  const handleTitleChange =
    (valueProp = "") =>
    (event) => {
      setValue({
        ...value,
        [valueProp]: event.target.value,
      });
    };

  // Debugging
  console.log(value);

  return (
    <div className="form-wrapper w-full min-h-lvh flex items-center justify-center py-24">
      <form
        action=""
        className="flex flex-col max-w-3xl p-8 gap-5 w-full border border-accent rounded-xl shadow-md"
        // onSubmit={addComponent}
      >
        <TextField
          label="Title"
          name="title"
          id="title"
          value={value.title || ""}
          onChange={handleTitleChange("title")}
        />
        <TextareaField
          label="Description"
          name="description"
          id="description"
          value={value.description || ""}
          onChange={handleTitleChange("description")}
        />
        <TextField
          label="Prelude"
          name="prelude"
          id="prelude"
          value={value.prelude || ""}
          onChange={handleTitleChange("prelude")}
        />
        <TextField
          label="Heading"
          name="heading"
          id="heading"
          value={value.heading || ""}
          onChange={handleTitleChange("heading")}
        />
        <hr />
        {/* <ContentField initialValue={value} changeCallback={setValue} /> */}
        <hr />
        <TextField
          label="Section"
          name="section"
          id="section"
          value={value.section || ""}
          onChange={handleTitleChange("section")}
        />
        <hr />
        {/* <CtaField initialValue={value} changeCallback={setValue} /> */}
        <hr />

        <TextField
          label="Preview Url"
          name="preview-url"
          id="preview-url"
          value={value.previewUrl || ""}
          onChange={handleTitleChange("previewUrl")}
        />
        <TextField
          label="Background Image"
          name="background-img"
          id="background-img"
          value={value.backgroundImg || ""}
          onChange={handleTitleChange("backgroundImg")}
        />
        <hr />
        {/* <Images initialValue={value} changeCallback={setValue} />
        <hr />
        <CarouselImg initialValue={value} changeCallback={setValue} />
        <hr />
        <GridImg initialValue={value} changeCallback={setValue} />
        <hr />
        <Tags initialValue={value} changeCallback={setValue} />
        <hr /> */}
        <TextField
          label="Text Position"
          name="text-position"
          id="text-position"
          value={value.textPosition || ""}
          onChange={handleTitleChange("textPosition")}
        />
        <TextField
          label="Image Position"
          name="image-position"
          id="image-position"
          value={value.imagePosition || ""}
          onChange={handleTitleChange("imagePosition")}
        />
        <hr />
        {/* <FormField initialValue={value} changeCallback={setValue} /> */}

        <Button type="" btnText={"Add Component"} />
        {/* <h2 className={isLoading ? "block" : "hidden"}>
          Adding Component Please Wait...
        </h2> */}
      </form>
    </div>
  );
}

export default Update;
