import React from "react";

function SelectField({ label, name, id, value, onChange, options = [] }) {
  const fieldStyling = `w-full border border-slate-400 rounded px-4 py-3 focus:outline-none focus:border-indigo-500 text-base`;
  const labelStyling = `absolute -top-3 start-5 z-10 bg-white p-1 text-sm uppercase`;

  return (
    <div className="input-group flex relative">
      <label htmlFor={id} className={labelStyling}>
        {label}
      </label>
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className={fieldStyling}
      >
        {/* Optionally, you can have a default option like below, or remove it if not needed */}
        <option value="">Select Fields Type</option>
        {options.map((option, index) => (
          <option key={index} value={option.optionVal}>
            {option.optionVal}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
