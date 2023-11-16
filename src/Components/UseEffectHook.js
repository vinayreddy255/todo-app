import { useEffect, useState } from "react";

const usersUrl = "https://jsonplaceholder.typicode.com/users";
const postsUrl = "https://jsonplaceholder.typicode.com/posts";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(10);
  const [loader, setLoader] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(usersUrl).then((response) => response);
      const data = await response.json();
      setLoader(false);
      setUsers(data);
    })();
  }, []);

  useEffect(() => {
    console.log("Component did update calling for Age....");
  }, [age]);

  const getPostList = async () => {
    const response = await fetch(postsUrl).then((response) => response);
    const data = await response.json();
    console.log("data>>>>", data);
  };

  return (
    <div>
      <h2>Use Effect Hook</h2>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Count Inc</button>
      <div>
        <h2>Age:{age}</h2>
      </div>
      <button onClick={() => setAge(age + 1)}>Age Inc</button>
      {loader ? (
        <h1>Data is loading please wait.....!!!1</h1>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      <div>
        <button onClick={getPostList}>GetPostList</button>
      </div>
    </div>
  );
}
export default UseEffectHook;
