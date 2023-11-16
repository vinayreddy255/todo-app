import "./style.css";
function Lists() {
  const arrList = ["Hyderbad", "Banglore", "Chennaie", "Pune", "Delhi"];
  const empData = [
    { name: "Ram", age: 24, sal: 1000, id: 100 },
    { name: "Krishan", age: 26, sal: 2000, id: 101 },
    { name: "Jay", age: 23, sal: 3000, id: 102 },
    { name: "Sam", age: 22, sal: 4000, id: 103 },
    { name: "Ravi", age: 17, sal: 5000, id: 104 },
    { name: "Raju", age: 28, sal: 6000, id: 105 },
    { name: "Reddy", age: 29, sal: 7000, id: 106 },
    { name: "Pradeep", age: 34, sal: 8000, id: 107 },
    { name: "Kaml", age: 30, sal: 9000, id: 108 },
    { name: "Kalyan", age: 32, sal: 10000, id: 109 },
    { name: "Krishan", age: 31, sal: 11000, id: 110 },
    { name: "Vijay", age: 40, sal: 12000, id: 111 },
  ];

  return (
    <div>
      <h3>List Componet</h3>
      {arrList.map(function (list, index) {
        return (
          <li key={index} name={list} className="list">
            {list}
          </li>
        );
      })}
      <table>
        <thead>
          <tr
            style={{ backgroundColor: "blue", fontSize: "22px", color: "#fff" }}
          >
            <th>SNO</th>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Sal</th>
          </tr>
        </thead>
        <tbody>
          {empData.map((empolye, index) => (
            <>
              <tr
                style={{
                  background:
                    empolye.sal <= 4000
                      ? "green"
                      : empolye.sal > 4000 && empolye.sal <= 8000
                      ? "yellow"
                      : "orange",
                }}
              >
                <td>{index + 1}</td>
                <td>{empolye.id}</td>
                <td>{empolye.name}</td>
                <td>{empolye.age}</td>
                <td>{empolye.sal}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Lists;
