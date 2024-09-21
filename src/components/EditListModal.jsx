import React from "react";
const EditListModal = (props) => {

  return (
    <div className="edit-Modal-container">
      <div className="edit-form">
        <div className="form-head">
          <h1>Edit Task</h1>
          <button className="close-btn" onClick={()=>{props.setOpen()}}>
            &times;
          </button>
        </div>
        <div className="form-body">
          <label htmlFor="name" required>
            Task Name
          </label>
          //item[0] beacause we are getting an single element array and thats why
          <input type="text" className="input" name="name" id="name" required value={props?.item[0]?.name}/>
          <label htmlFor="description">Description</label>
          <textarea
            cols={4}
            rows={6}
            type="text"
            className="input"
            name="description"
            id="description"
            required
            //item[0] beacause we are getting an single element array and thats why
            value={props?.item[0]?.description}
          />
          <button className="edit-btn">Edit <img src="./pencil.png" width="12" height="12" alt="edit-btn"/></button>
        </div>
      </div>
    </div>
  );
};

export default EditListModal;
