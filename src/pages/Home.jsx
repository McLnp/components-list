import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/SupabaseClient";
import Button from "../components/Button";
import CardList from "../components/CardList";

function Home() {
  const [components, setComponents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data, error } = await supabase
      .from("components")
      .select(
        "*,components_contentItems(*),components_ctaItems(*),components_tagItems(*),components_formFields(*),components_images(*),components_carouselImages(*),components_gridImages(*)"
      );

    if (error) {
      console.error("Error fetching data:", error);
      return;
    }

    if (data) {
      console.log("Fetched data:", data);

      setComponents(data);
    }
  }

  const handleClick = () => {
    navigate("/create");
  };

  return (
    <div className="w-full max-w-7xl m-auto pt-28 flex flex-col gap-8">
      <h1 className="text-5xl">Components List</h1>
      <ul className="grid grid-cols-3 gap-5">
        {components.map((component) => (
          <CardList key={component.id} component={component} />
        ))}
      </ul>

      <Button btnText={"Create"} onClick={handleClick} />
    </div>
  );
}

export default Home;
