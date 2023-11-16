import { useState } from "react";

function FormHandling() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });
  const [userList, setUserList] = useState([]);

  const formHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = () => {
    const userdata = [...userList];
    const fomValues = Object.values(formData);
    const isMandtory = fomValues.every((e) => e);
    if (isMandtory) {
      userdata.push(formData);
      setUserList(userdata);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
      });
    }
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
            value={formData.firstName}
          />
          {formData.firstName == "" && (
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
            value={formData.lastName}
          />
          {formData.lastName == "" && (
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
            value={formData.email}
          />
          {formData.email == "" && (
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
            value={formData.address}
          />
          {formData.address == "" && (
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
                <button>Edit</button>
                <button>Delet</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default FormHandling;
