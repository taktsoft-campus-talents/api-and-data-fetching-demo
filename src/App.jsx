import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [numResults, setNumResults] = useState(5);

  async function handleLoadData() {
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?results=${numResults}&gender=female`
      );
      console.log(response.data.results);
      setUsers(response.data.results);
    } catch (error) {
      console.log(error);
      console.log("something went wrong");
      alert("something went wrong, try again later");
    }
  }

  return (
    <>
      <p>Anzahl Ergebnisse: {numResults}</p>
      <button
        onClick={() => {
          setNumResults((prev) => prev + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setNumResults((prev) => prev - 1);
        }}
      >
        Decrease
      </button>
      <button onClick={handleLoadData}>Load Data</button>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              {user.name.first} {user.name.last}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
