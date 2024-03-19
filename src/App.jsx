import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Form></Form>
    </>
  );
}

export default App;
