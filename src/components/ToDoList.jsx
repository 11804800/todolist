//importing
import { useState } from "react";
import AddNewModal from "./AddNewModal";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  //state:for making addnewtaskmodal component render
  const [visible, setVisible] = useState(false);

  //function:to toggle the view state of addnewtaskmodal component
  function ToggleModal() {
    setVisible(!visible);
  }

  return (
    //react fragment
    <>
    {/* state true then render the addnewmodal component else not */}
      {visible && (
        <AddNewModal ToggleModal={ToggleModal} AddNew={props.AddNew} />
      )}
      <div className="container">
        {/* btn container for addnew and clearall btn */}
        <div className="btn-container">
          <button onClick={ToggleModal} className="add-new-btn">
            Add New Task
          </button>
          {/* Onclick: it the call the function from app component passed as props to this component */}
          <button className="clear-btn" onClick={props.ClearAll}>
            Clear All
          </button>
        </div>
        <div className="list-container">
          {/* if the list is empty then render noitemcontainer  else render the list*/}
          {props.list.length > 0 ? (
            props.list.map((item, index) => {
              return (
                <ToDoItem
                  item={item}
                  key={item.id}
                  DeleteSingle={props.DeleteSingle}
                  index={index}
                  EditListItem={props.EditListItem}
                  SetChecked={props.SetChecked}
                />
              );
            })
          ) : (
            <div className="no-item-container">
              <h1>Add New Task To List</h1>
              <button onClick={ToggleModal} className="add-new-btn">
                Add New Task
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ToDoList;
