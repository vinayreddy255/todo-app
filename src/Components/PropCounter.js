function PropCounter(props) {
  const { empData, reciveChaildData } = props;
  const sedDataAction = () => {
    const obj = { pincode: 1234, email: "abc@gmail.com", company: "ibm" };
    reciveChaildData(obj);
  };

  return (
    <div>
      <h2>PropCounter</h2>
      <button onClick={sedDataAction}>send Data</button>
    </div>
  );
}
export default PropCounter;
