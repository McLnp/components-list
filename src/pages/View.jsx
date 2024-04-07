import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../config/SupabaseClient";

function View() {
  const { id: component_id } = useParams();
  const [componentVal, setComponentVal] = useState({});
  const cardStyling = "p-6 rounded-lg shadow-md flex flex-col gap-3";
  const cardHeadingStyle = "font-semibold text-orange-500 text-lg";

  useEffect(() => {
    fetchComponent();
  }, [component_id]);

  async function fetchComponent() {
    const { data, error } = await supabase
      .from("components")
      .select(
        "*,components_contentItems(*),components_ctaItems(*),components_tagItems(*),components_formFields(*),components_images(*),components_carouselImages(*),components_gridImages(*)"
      )
      .eq("id", component_id);

    if (error) {
      console.log(error);
      return;
    }

    if (data) {
      setComponentVal(data[0] || {});
    }
  }

  console.log(componentVal);
  const infoArr = [
    { label: "Description", value: componentVal.description },
    { label: "Heading", value: componentVal.heading },
    { label: "Prelude", value: componentVal.prelude },
    { label: "Section", value: componentVal.section },
    { label: "Previw Url", value: componentVal.preview_url },
    { label: "Text Position", value: componentVal.text_position },
    { label: "Image Position", value: componentVal.image_position },
    { label: "Background Image", value: componentVal.background_img },
  ];

  const carouselImages = componentVal.components_carouselImages || [];
  const contentItems = componentVal.components_contentItems || [];
  const ctaItems = componentVal.components_ctaItems || [];
  const formFields = componentVal.components_formFields || [];
  const gridImages = componentVal.components_gridImages || [];
  const tagItems = componentVal.components_tagItems || [];
  const images = componentVal.components_images || [];

  return (
    <div className="py-24 m-auto max-w-7xl ">
      {componentVal && (
        <>
          <h1 className="text-4xl font-semibold capitalize">
            {componentVal.title}
          </h1>

          <div className="grid grid-cols-3 gap-5 pt-7">
            {infoArr.map((item, index) => (
              <div key={index} className={`${cardStyling}`}>
                <h4 className={cardHeadingStyle}>{item.label}</h4>
                <p>{item.value}</p>
              </div>
            ))}
            <div className={`${cardStyling}`}>
              <h4 className={cardHeadingStyle}>Carousel Images</h4>
              {carouselImages.map((item) => (
                <div key={item.id}>
                  <p>{item.component_carousel_img}</p>
                </div>
              ))}
            </div>
            <div className={`${cardStyling}`}>
              <h4 className={cardHeadingStyle}>Content Items</h4>
              {contentItems.map((item, index) => (
                <div key={item.id}>
                  <ul>
                    <li>
                      Column {index + 1}: {item.content_column}
                    </li>
                    <li>
                      Heading {index + 1}: {item.content_heading}
                    </li>
                    <li>
                      Icon {index + 1}: {item.content_icon}
                    </li>
                    <li>
                      Text {index + 1}: {item.content_text}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
            <div className={`${cardStyling}`}>
              <h4 className={cardHeadingStyle}>Cta Items</h4>
              {ctaItems.map((item, index) => (
                <div key={item.id}>
                  <ul>
                    <li>
                      Text {index + 1}: {item.cta_text}
                    </li>
                    <li>
                      Link {index + 1}: {item.cta_link}
                    </li>
                    <li>
                      Icon {index + 1}: {item.cta_icon}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
            <div className={`${cardStyling}`}>
              <h4 className={cardHeadingStyle}>Form Fields</h4>
              {formFields.map((item, index) => (
                <div key={item.id}>
                  <ul>
                    <li>
                      Type {index + 1}: {item.component_field_type}
                    </li>
                    <li>
                      Label {index + 1}: {item.component_field_label}
                    </li>
                    <li>
                      Placeholder {index + 1}:{" "}
                      {item.component_field_placeholder}
                    </li>
                    <li>
                      Icon {index + 1}: {item.component_field_icon}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
            <div className={`${cardStyling}`}>
              <h4 className={cardHeadingStyle}>Grid Images</h4>
              {gridImages.map((item, index) => (
                <div key={item.id}>
                  <p>{item.component_grid_images}</p>
                </div>
              ))}
            </div>
            <div className={`${cardStyling}`}>
              <h4 className={cardHeadingStyle}>Tag Items</h4>
              {tagItems.map((item, index) => (
                <div key={item.id}>
                  <p>{item.component_tags}</p>
                </div>
              ))}
            </div>
            <div className={`${cardStyling}`}>
              <h4 className={cardHeadingStyle}>Images</h4>
              {images.map((item, index) => (
                <div key={item.id}>
                  <ul>
                    <li>
                      Src {index + 1}: {item.component_images_src}
                    </li>
                    <li>
                      Alt {index + 1}: {item.component_images_alt}
                    </li>
                    <li>
                      Position {index + 1}: {item.component_images_position}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default View;
