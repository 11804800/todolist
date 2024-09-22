//importing
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import EditListModal from "./components/EditListModal";

function App() {

  
  const [open, setOpen] = useState(false);
  //state for index to edit the todolist
  const [EditIndex, setIndex] = useState(-1);

  //state for list
  const [list, setList] = useState([]);

  //pushing/adding new task to the todo list
  function AddNew(name, description) {
    list.push({
      name: name,
      id: Math.random(),
      description: description,
      completed: false,
    });
  }

  //deleting the specific task from list
  function DeleteSingle(index) {
    if (index != undefined || index != null) {
      const newList = list.filter((item, idx) => idx !== index);
      setList(newList);
    }
  }

  //empting the todo list function
  function ClearAll() {
    setList([]);
  }

  //edit the specific todo list task function
  function EditListItem(index) {
    if (index != undefined || index != null) {
      setIndex(index);
    }
    setOpen(!open);
  }

  //submit and updating the todo list function 
  function SubmitEditForm(name, description, id, completed) {
    list[EditIndex] = {
      name: name,
      description: description,
      id: id,
      completed: completed
    };
  }

  //function;:For checking the task or mark as complete
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
      {/* state for edit modal when open state change it will be rendered on screen */}
      {open && (
        <EditListModal
          item={list.filter((item, idx) => idx === EditIndex)}
          open={open}
          setOpen={setOpen}
          SubmitEditForm={SubmitEditForm}
          SetChecked={SetChecked}
        />
      )}
      {/* ======================header component=========== */}
      <Header />
      {/* ======================TodoList=================== */}
      {/* inside todolist there is todoItem component */}
      {/* Props has been passed like list and some functions to manupulate the list like pushing, updating deleting and emptying */}
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
      {/* ==========================Footer component------------------ */}
      <Footer />
    </div>
  );
}

// ==============================================Footer=================================================
const Footer = () => {
  return (
    <div className="footer">
      <p>@copyright@2024-2025 All rights reserved</p>
    </div>
  );
};

export default App;
