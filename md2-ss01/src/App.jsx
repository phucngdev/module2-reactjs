import "./App.css";
import React from "react";
import Parent_Component from "./components/parent_Component";

function App() {
  const user = [
    {
      id: 1,
      name: "A",
      age: 1,
    },
    {
      id: 2,
      name: "B",
      age: 2,
    },
    {
      id: 3,
      name: "C",
      age: 3,
    },
  ];
  return (
    <>
      <Parent_Component user={user}></Parent_Component>
    </>
  );
}

export default App;
