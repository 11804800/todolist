import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import EditListModal from "./components/EditListModal";

function App() {
  const [open, setOpen] = useState(false);
  const [EditIndex, setIndex] = useState(-1);

  const [list, setList] = useState([
    {
      id: 1,
      name: "Hugging",
      description: "I am gonna hug you some day",
      completed: false,
    },
    {
      id: 2,
      name: "Kissing",
      description: "I am gonna kiss you some day",
      completed: true,
    },
    {
      id: 3,
      name: "Love",
      description: "You Gonna love me some day",
      completed: false,
    },
  ]);

  function AddNew(name, description) {
    list.push({
      name: name,
      id: Math.random(),
      description: description,
      completed: false,
    });
  }

  function DeleteSingle(index) {
    if (index != undefined || index != null) {
      const newList = list.filter((item, idx) => idx !== index);
      setList(newList);
    }
  }

  function ClearAll() {
    setList([]);
  }

  function EditListItem(index) {
    if (index != undefined || index != null) {
      setIndex(index);
    }
    setOpen(!open);
  }

  function SubmitEditForm(name, description, id, completed) {
    list[EditIndex] = {
      name: name,
      description: description,
      id: id,
      completed: completed,
    };
  }

  return (
    <div className="App">
      {open && (
        <EditListModal
          item={list.filter((item, idx) => idx === EditIndex)}
          open={open}
          setOpen={setOpen}
          SubmitEditForm={SubmitEditForm}
        />
      )}
      <Header />
      <ToDoList
        list={list}
        AddNew={AddNew}
        ClearAll={ClearAll}
        DeleteSingle={DeleteSingle}
        EditListItem={EditListItem}
        setOpen={setOpen}
        open={open}
      />
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
