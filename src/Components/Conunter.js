import { useState } from "react";
function Conunter() {
  const [count, setCount] = useState(0);

  const inCremntAction = () => {
    setCount(count + 1);
  };

  const decrmentAction = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const counterActions = (parm) => {
    if (parm == "inc") {
      setCount(count + 1);
    } else if (parm == "dec") {
      if (count > 0) {
        setCount(count - 1);
      }
    }
  };

  return (
    <div>
      <h2>Countnter....!</h2>
      <h3>Count:{count}</h3>
      {/* <button onClick={inCremntAction}>Increment</button>
      <button onClick={decrmentAction}>Decrment</button> */}
      <button onClick={() => counterActions("inc")}>Increment</button>
      <button onClick={() => counterActions("dec")}>Decrment</button>
    </div>
  );
}
export default Conunter;
