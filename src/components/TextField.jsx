import React from "react";

function TextField({
  label,
  name,
  id,
  value,
  onChange,
  type = "text",
  addStyle = "",
}) {
  const fieldStyling = `w-full border border-slate-400 rounded px-4 py-3 focus:outline-none focus:border-indigo-500 text-base `;
  const labelStyling = `absolute -top-3 start-5 z-10 bg-white p-1 text-sm uppercase`;

  return (
    <div className={`input-group flex relative ${addStyle}`}>
      <label htmlFor={id} className={`${labelStyling}`}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className={`${fieldStyling}`}
      />
    </div>
  );
}

export default TextField;
