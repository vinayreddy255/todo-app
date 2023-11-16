import { useRef } from "react";
function UseRefHook() {
  const inputRef = useRef();
  const clickAction = () => {
    console.log(inputRef.current.value);
  };
  return (
    <div>
      <h2>Use Ref Hook</h2>
      <input type="text" ref={inputRef} />
      <button onClick={clickAction}>Click</button>
    </div>
  );
}
export default UseRefHook;
