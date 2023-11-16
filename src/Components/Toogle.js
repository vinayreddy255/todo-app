import "./style.css";

import { useState } from "react";
function Toogle() {
  const [show, setShow] = useState(true);
  const [text, setText] = useState("Show");

  /*  const showAction = () => {
    setShow(true);
  };
  const hideAction = () => {
    setShow(false);
  }; */
  const showHideAction = () => {
    let showVal = !show;
    if (showVal) {
      setText("Show");
    } else {
      setText("Hide");
    }
    setShow(showVal);
  };
  return (
    <div>
      <h1>Toogle</h1>
      <div className={`content ${show ? "content-show" : "content-hide"}`}>
        {show ? <h3>Show Content</h3> : <h3>Hide Content</h3>}
      </div>
      <button onClick={showHideAction}>{text}</button>
      {/* <button onClick={showHideAction}>Hide</button> */}
    </div>
  );
}
export default Toogle;
