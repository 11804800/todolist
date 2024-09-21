import React, { useState } from "react";
const EditListModal = (props) => {
  const [state, Setstate] = useState({
    name: props?.item[0]?.name,
    description: props?.item[0]?.description,
  });

  function SetValue(e) {
    Setstate((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function SubmitForm() {
    props.SubmitEditForm(
      state.name,
      state.description,
      props?.item[0]?.id,
      props?.item[0]?.completed
    );
    props.setOpen(!props.open);
  }

  return (
    <div className="edit-Modal-container">
      <div className="edit-form">
        <div className="form-head">
          <h1>Edit Task</h1>
          <button
            className="close-btn"
            onClick={() => {
              props.setOpen();
            }}
          >
            &times;
          </button>
        </div>
        <div className="form-body">
          <label htmlFor="name" required>
            Task Name
          </label>
          {/* //item[0] beacause we are getting an single element array and thats why */}
          <input
            type="text"
            className="input"
            name="name"
            id="name"
            required
            value={state.name}
            onChange={(e) => SetValue(e)}
          />
          <label htmlFor="description">Description</label>
          {/* //item[0] beacause we are getting an single element array and thats why */}
          <textarea
            cols={4}
            rows={6}
            type="text"
            className="input"
            name="description"
            id="description"
            required
            value={state?.description}
            onChange={(e) => SetValue(e)}
          />
          <button className="edit-btn" onClick={SubmitForm}>
            Edit{" "}
            <img src="./pencil.png" width="12" height="12" alt="edit-btn" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditListModal;
