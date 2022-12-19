import { useState } from "react";

const Counter = ({ timer }) => {
  console.log("inside timer:", timer);
  const [count, setCount] = useState(timer);

  const handleTimer = () => {
    setCount(count - 1);
  };

  setInterval(() => {
    handleTimer();
  }, 1000);

  return (
    <div>
      <h1>Timer:{timer}</h1>
      <button onClick={() => handleTimer}>Start</button>
      <div>{count}</div>
    </div>
  );
};
export default Counter;
