import { useState } from "react";

const ToDoItem = (props) => {
  const [visible, setvisible] = useState(false);
  return (
    <div className="item-container" key={props.item.id}>
      <div className="item-tags">
        <div className="item-name">
          <input type="checkbox" />
          <p>{props.item?.name}</p>
        </div>
        <div className="item-btns">
          <button>
            <img
              src="./trash-bin.png"
              width="12"
              height="12"
              alt="delete-btn"
            />
          </button>
          <button>
            <img src="./pencil.png" width="12" height="12" alt="edit-btn" />
          </button>
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
              style={{rotate:`${visible ? "180deg":"0deg"}`}}
              className="caret-img"
            />
          </button>
        </div>
      </div>
      <div className="item-description" style={{display:`${visible ? "flex":"none"}`}}>
        <p>{props.item?.description}</p>
      </div>
    </div>
  );
};

export default ToDoItem;
