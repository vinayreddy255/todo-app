function Buttons(props) {
  return (
    <>
      <button onClick={props.editAction}>Edit</button>
      <button onClick={props.deleteRecord}>Delete</button>
    </>
  );
}

export default Buttons;
