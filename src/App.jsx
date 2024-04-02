import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Link className="p-3" to="/">
          Home
        </Link>
        <Link className="p-3" to="/create">
          Create
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
