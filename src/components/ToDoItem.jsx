import { useState } from "react";

const ToDoItem = (props) => {
  const [visible, setvisible] = useState(false);
  const [checked, SetChecked] = useState(props?.item?.completed);

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
    <div className="item-container" key={props.item.id}>
      <div className="item-tags">
        <div className="item-name">
          <input
            type="checkbox"
            checked={checked}
            className="check"
            onChange={(e) => ChangeChecked()}
          />
          <p
            className="name"
            style={{ textDecoration: `${checked ? "line-through" : "none"}` }}
          >
            {props.item?.name}
          </p>
        </div>
        <div className="item-btns">
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
          <button onClick={() => props.EditListItem(props.index)}>
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
              style={{ rotate: `${visible ? "180deg" : "0deg"}` }}
              className="caret-img"
            />
          </button>
        </div>
      </div>
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
