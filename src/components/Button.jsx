import React from "react";

function Button({ onClick }) {
  return (
    <button
      type="button"
      className="add-content px-7 py-3 border rounded border-slate-400 self-end hover:bg-slate-900 hover:text-white hover:border-slate-900 transition"
      onClick={onClick}
    >
      Add Content
    </button>
  );
}

export default Button;
