import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";
import ToDoList from "./components/ToDoList";

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      name: "Hugging",
      description: "I am gonna hug you some day",
      completed:false
    },
    {
      id: 2,
      name: "Kissing",
      description: "I am gonna kiss you some day",
      completed:true
    },
    {
      id: 3,
      name: "Love",
      description: "You Gonna love me some day",
      completed:false
    }
  ]);

  function AddNew(name,description) {
    list.push({
      name:name,
      id:Math.random(),
      description:description,
      completed:false
    });
  }

  function DeleteSingle(index)
  {
    console.log(index);
  }

  function ClearAll()
  {
    setList([]);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList list={list} AddNew={AddNew} ClearAll={ClearAll} DeleteSingle={DeleteSingle}/>
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <div className="footer">
      <p>@copyright@2024-2025 All rights reserved</p>
    </div>
  );
};

export default App;
