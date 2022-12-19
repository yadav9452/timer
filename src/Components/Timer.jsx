import Counter from "./Counter";

const Timer = ({ handleChange, value, handleSubmit, timer }) => {
  return (
    <div style={{ color: "blue" }}>
      <input
        placeholder="Input Time in seconds"
        onChange={handleChange}
        value={value}
        style={{ color: "green", width: "130px" }}
      />
      <button onClick={handleSubmit}>Submit</button>
      {/* {<div>Value:{value}</div>} */}
      {/* {<div>Timer:{timer}</div>} */}
      <Counter timer={timer} />
    </div>
  );
};

export default Timer;
