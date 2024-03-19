import React from "react";

function TextareaField({ label, name, id, value, onChange }) {
  const fieldStyling = `w-full border border-slate-400 rounded px-4 py-3 focus:outline-none focus:border-indigo-500 text-base `;
  const labelStyling = `absolute -top-3 start-5 z-10 bg-white p-1 text-sm uppercase`;
  return (
    <div className="input-group flex relative">
      <label htmlFor="description" className={`${labelStyling}`}>
        {label}
      </label>
      <textarea
        name={name}
        id={id}
        cols="30"
        rows="10"
        value={value}
        onChange={onChange}
        className={`${fieldStyling}`}
      ></textarea>
    </div>
  );
}

export default TextareaField;
