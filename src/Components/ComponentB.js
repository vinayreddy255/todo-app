import { useContext } from "react";
import { MyContext } from "./ContextApi";
function ComponentB() {
  const contextBData = useContext(MyContext);
  console.log("compoent B Data>>>", contextBData);
  return (
    <div>
      <h1>Component B</h1>
    </div>
  );
}

export default ComponentB;
