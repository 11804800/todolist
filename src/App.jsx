import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import EditListModal from "./components/EditListModal";

function App() {
  const [open, setOpen] = useState(false);
  const [EditIndex, setIndex] = useState(-1);
  const [list, setList] = useState([]);

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

  function SetChecked(name, description, id, completed, index) {
    list[index] = {
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
          SetChecked={SetChecked}
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
        SetChecked={SetChecked}
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
