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
          <button className="clear-btn" onClick={props.ClearAll}>Clear All</button>
        </div>
        <div className="list-container">
          {props.list.map((item,index) => {
            return <ToDoItem item={item} key={item.id} DeleteSingle={props.DeleteSingle} index={index} EditListItem={props.EditListItem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ToDoList;
