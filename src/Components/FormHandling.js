import { useState } from "react";
import Buttons from "./Buttons";

function FormHandling() {
  const [formData, setFormData] = useState({
    firstName: null,
    lastName: null,
    email: null,
    address: null,
    isEdit: "add",
  });
  const [userList, setUserList] = useState([]);

  const formHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = () => {
    const userdata = [...userList];
    const fomValues = Object.values(formData);
    let isMandtory = fomValues.every((e) => e);
    if (formData.index == 0 && formData.isEdit == "edit") {
      isMandtory = true;
    }
    const obj = { ...formData };
    if (formData.firstName == null || formData.firstName == "") {
      obj.firstName = "";
    }
    if (formData.lastName == null || formData.lastName == "") {
      obj.lastName = "";
    }
    if (formData.email == null || formData.email == "") {
      obj.email = "";
    }
    if (formData.address == null || formData.address == "") {
      obj.address = "";
    }

    const emailCheck = userList.filter(
      (users) => users.email == formData.email
    );

    if (emailCheck.length > 0 && formData.isEdit !== "edit") {
      alert("Email is alerday exist....!!!");
      return;
    }
    console.log(formData, isMandtory);

    if (isMandtory) {
      if (formData.isEdit == "edit") {
        userdata[formData.index] = formData;
        setUserList(userdata);
      } else {
        userdata.push(formData);
        setUserList(userdata);
      }
      setFormData({
        firstName: null,
        lastName: null,
        email: null,
        address: null,
      });
    } else {
      setFormData(obj);
    }
  };

  const editAction = (index, email) => {
    const usersData = [...userList];
    usersData[index].isEdit = "edit";
    usersData[index].index = index;
    console.log(index, email);
    setFormData(usersData[index]);
  };

  const deleteRecord = (index) => {
    const copyUsers = [...userList];
    copyUsers.splice(index, 1);
    setUserList(copyUsers);
  };

  return (
    <div>
      <h2>FormHandling</h2>
      <div className="forms">
        <div>
          <label>
            First Name<spna className="required">*</spna>
          </label>
          <input
            type="text"
            name="firstName"
            onChange={formHandler}
            value={formData.firstName != null ? formData.firstName : ""}
          />
          {formData.firstName != null && formData.firstName == "" && (
            <span className="error-msg">First Name is Required....</span>
          )}
        </div>
        <div>
          <label>
            Last Name <spna className="required">*</spna>
          </label>

          <input
            type="text"
            name="lastName"
            onChange={formHandler}
            value={formData.lastName != null ? formData.lastName : ""}
          />
          {formData.lastName != null && formData.lastName == "" && (
            <span className="error-msg">Last Name is Required....</span>
          )}
        </div>
        <div>
          <label>
            Email <spna className="required">*</spna>
          </label>
          <input
            type="text"
            name="email"
            onChange={formHandler}
            value={formData.email != null ? formData.email : ""}
          />
          {formData.email != null && formData.email == "" && (
            <span className="error-msg">Email is Required....</span>
          )}
        </div>
        <div>
          <label>
            Address <spna className="required">*</spna>
          </label>
          <input
            type="text"
            name="address"
            onChange={formHandler}
            value={formData.address != null ? formData.address : ""}
          />
          {formData.address != null && formData.address == "" && (
            <span className="error-msg">Address is Required....</span>
          )}
        </div>
        <button onClick={submitHandler}>Submit</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>
                {/* <button onClick={() => editAction(index, user.email)}>
                  Edit
                </button>
                <button onClick={() => deleteRecord(index)}>Delet</button> */}
                <Buttons
                  editAction={() => editAction(index, user.email)}
                  deleteRecord={() => deleteRecord(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default FormHandling;
