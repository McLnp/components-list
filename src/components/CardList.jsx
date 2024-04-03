import React from "react";

function CardList({ component_title, component_desc, component_tags = [] }) {
  return (
    <li className="p-6 rounded-lg shadow-md flex flex-col gap-3">
      <h4 className="text-orange-500 text-xl font-bold">{component_title}</h4>
      <p className="text-base">{component_desc}</p>
      <div className="flex gap-3 mt-5 items-center">
        <h4 className="text-base font-bold text-orange-600">Tags:</h4>
        {component_tags.map((tag) => (
          <span key={tag.id} className="text-sm font-semibold">
            {tag.component_tags}
          </span>
        ))}
      </div>
    </li>
  );
}

export default CardList;
