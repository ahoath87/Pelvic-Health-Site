import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  return (
    <div>
      {typeof backendData.users === "undefined" ? (
        <p>Loading</p>
      ) : (
        backendData.users.map((user) => <p key={user.id}>{user.name}</p>)
      )}
    </div>
  );
}

export default App;
