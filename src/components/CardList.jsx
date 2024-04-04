import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function CardList({ component = {} }) {
  const navigate = useNavigate();

  const handleClick = (component_id) => {
    navigate(`/component/${component_id}`);
  };

  return (
    <li className="p-6 rounded-lg shadow-md flex flex-col gap-3">
      <h4 className="text-orange-500 text-xl font-bold">{component.title}</h4>
      <p className="text-base">{component.description}</p>
      <div className="flex gap-3 mt-5 items-center">
        <h4 className="text-base font-bold text-orange-600">Tags:</h4>
        {component.components_tagItems.map((tag) => (
          <span key={tag.id} className="text-sm font-semibold">
            {tag.component_tags}
          </span>
        ))}
      </div>
      <Button
        btnText={"View Component"}
        onClick={() => handleClick(component.id)}
      />
    </li>
  );
}

export default CardList;
