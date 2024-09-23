import { useState } from "react";
import "./App.css";
import Memory from "./Memory";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Memory />
    </>
  );
}

export default App;
