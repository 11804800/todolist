import { useState } from "react";

const ToDoItem = (props) => {

  //state for making the description of task visible
  const [visible, setvisible] = useState(false);
  //for task is completed or not
  const [checked, SetChecked] = useState(props?.item?.completed);

  //function:for changing the mark as complete 
  function ChangeChecked() {
    props.SetChecked(
      props.item.name,
      props.item.description,
      props.item.id,
      checked,
      props.index
    );
    
    SetChecked(!checked);
  }

  return (
    //item container
    <div className="item-container" key={props.item.id}>
      {/* containing name and check input description delete edit btn */}
      <div className="item-tags">
        <div className="item-name">
          {/* check input */}
          <input
            type="checkbox"
            checked={checked}
            className="check"
            onChange={(e) => ChangeChecked()}
          />
          {/* task name */}
          <p
            className="name"
            style={{ textDecoration: `${checked ? "line-through" : "none"}` }}
          >
            {props.item?.name}
          </p>
        </div>
        {/* btn container */}
        <div className="item-btns">
          {/* delete btn */}
          <button
            onClick={() => {
              props.DeleteSingle(props.DeleteSingle(props.index));
            }}
          >
            <img
              src="./trash-bin.png"
              width="12"
              height="12"
              alt="delete-btn"
            />
          </button>
          {/* edit btn */}
          <button onClick={() => props.EditListItem(props.index)}>
            <img src="./pencil.png" width="12" height="12" alt="edit-btn" />
          </button>
          {/* description toggle btn */}
          <button
            className="caret-btn"
            onClick={() => {
              setvisible(!visible);
            }}
          >
            <img
              src="./caret-down.svg"
              width="25"
              height="25"
              alt="caret-btn"
              style={{ rotate: `${visible ? "180deg" : "0deg"}` }}
              className="caret-img"
            />
          </button>
        </div>
      </div>
      {/* task description */}
      <div
        className="item-description"
        style={{ display: `${visible ? "flex" : "none"}` }}
      >
        <p>{props.item?.description}</p>
      </div>
    </div>
  );
};

export default ToDoItem;
