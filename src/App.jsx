import { useState } from "react";
import Timer from "./Components/Timer";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const [timer, setTimer] = useState(value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setTimer(value);
  };
  return (
    <div className="App">
      <h1>Timer App</h1>
      <Timer
        handleChange={() => handleChange}
        value={value}
        handleSubmit={() => handleSubmit}
        timer={timer}
      />
    </div>
  );
}
