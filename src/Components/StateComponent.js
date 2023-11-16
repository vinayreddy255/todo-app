import { useState, Fragment } from "react";
import PropCounter from "./PropCounter";

function StateComponent() {
  const [city, setCity] = useState("Bangalore");
  const empDetails = [
    { name: "Ram", age: 25, city: "Bangalore", phone: 123456789, id: 102 },
    { name: "Sam", age: 27, city: "Hydeaerbad", phone: 987659, id: 101 },
  ];
  const [empData, setEmpData] = useState({});

  const clickHandler = () => {
    let ncity = "Hyderbad";
    setCity(ncity);
  };

  const reciveChaildData = (data) => {
    console.log("chaild data>>>", data);
    setEmpData(data);
  };

  return (
    <>
      <h2>State Componet</h2>
      <h3>City:{city}</h3>
      <h4>Componay:{empData.company}</h4>
      <h4>Email:{empData.email}</h4>
      <h4>PinCode:{empData.pincode}</h4>
      <button onClick={clickHandler}>Change City</button>
      <PropCounter empData={empDetails} reciveChaildData={reciveChaildData} />
    </>
  );
}

export default StateComponent;
