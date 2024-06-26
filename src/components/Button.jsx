import React from "react";

function Button({ type = "button", btnText, onClick }) {
  return (
    <button
      type={type}
      className="add-content px-7 py-3 border rounded border-slate-400 self-end hover:bg-slate-900 hover:text-white hover:border-slate-900 transition"
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}

export default Button;
