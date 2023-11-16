import logo from "./logo.svg";
import "./App.css";
import "./Components/style.css";
import HelloWorld from "./Components/HelloWorld";
import StateComponent from "./Components/StateComponent";
import Conunter from "./Components/Conunter";
import Toogle from "./Components/Toogle";
import Lists from "./Components/Lists";
import FormHandling from "./Components/FormHandling";
import UseEffectHook from "./Components/UseEffectHook";
import UseRefHook from "./Components/UseRefHook";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import { MyContext } from "./Components/ContextApi";
function App() {
  const citys = [
    { name: "Hydeerbad", state: "TN" },
    { name: "Bangalore", state: "KA" },
    { name: "Pune", state: "Mh" },
    { name: "Mumbaie", state: "MH" },
  ];
  return (
    <MyContext.Provider value={citys}>
      <div>
        {/* <HelloWorld />
      <StateComponent /> */}
        {/* <Conunter /> */}
        {/* <Toogle /> */}
        {/* <Lists /> */}
        {/* <FormHandling /> */}
        {/* <UseEffectHook />
      <UseRefHook /> */}
        <ComponentA />
        <ComponentB />
      </div>
    </MyContext.Provider>
  );
}

export default App;
