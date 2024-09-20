import { useState } from "react";
import AddNewModal from "./AddNewModal";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {


  const [visible,setVisible]=useState(false);

  function ToggleModal()
  {
    setVisible(!visible);
  }

  return (
    <>
    { 
        visible && <AddNewModal ToggleModal={ToggleModal} AddNew={props.AddNew}/>
    }
      <div className="container">
        <div className="btn-container">
          <button onClick={ToggleModal} className="add-new-btn" >Add New Task</button>
          <button className="clear-btn">Clear All</button>
        </div>
        <div className="list-container">
          {props.list.map((item) => {
            return <ToDoItem item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ToDoList;
