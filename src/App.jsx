import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import View from "./pages/View";
import Update from "./pages/Update";

export function App() {
  const linkStyle = "p-3 text-base font-bold text-white";
  return (
    <BrowserRouter>
      <div className="w-full py-7 bg-indigo-400">
        <div className="nav-menu w-ful max-w-7xl  m-auto ">
          <Link className={linkStyle} to="/">
            Home
          </Link>
          <Link className={linkStyle} to="/create">
            Create
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/component/:id" element={<View />} />
        <Route path="/component-update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
