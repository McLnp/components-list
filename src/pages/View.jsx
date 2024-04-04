import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../config/SupabaseClient";

function View() {
  const { id: component_id } = useParams();
  const [componentVal, setComponentVal] = useState({});

  useEffect(() => {
    fetchComponent();
  }, []);

  async function fetchComponent() {
    const { data, error } = await supabase
      .from("components")
      .select(
        "*,components_contentItems(*),components_ctaItems(*),components_tagItems(*),components_formFields(*),components_images(*),components_carouselImages(*),components_gridImages(*)"
      )
      .eq("id", component_id);

    if (error) {
      console.log(error);
    }

    if (data) {
      setComponentVal(data[0]);
    }
  }

  console.log(componentVal);

  return (
    <div className="py-24 m-auto max-w-7xl">
      {componentVal && (
        <>
          <h1 className="text-4xl font-semibold capitalize">
            {componentVal.title}
          </h1>

          <div className="grid"></div>
        </>
      )}
    </div>
  );
}

export default View;
