import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/SupabaseClient";
import Button from "../components/Button";

function Home() {
  const [components, setComponents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data, error } = await supabase
      .from("components")
      .select("*,components_contentItems(*)");

    if (error) {
      console.error("Error fetching data:", error);
      return;
    }

    console.log("Fetched data:", data);
    setComponents(data);
  }

  const handleClick = () => {
    navigate("/create");
  };

  if (components.length > 0) {
    return (
      <>
        {components && (
          <ul>
            {components.map((component) => (
              <li key={component.id}>{component.title}</li>
            ))}
          </ul>
        )}

        <Button btnText={"Create"} onClick={handleClick} />
      </>
    );
  }
}

export default Home;
