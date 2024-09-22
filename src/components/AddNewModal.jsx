//modal for adding new task to the list
import React from "react";
const AddNewModal = (props) => {

  //form submitting function
  function OnFormSubmit(event) {
    event.preventDefault();
    props.AddNew(event.target.name.value,event.target.description.value);
    form.reset();
    props.ToggleModal();
  }


  return (

    // modal container
    <div className="add-new-Modal-container">
      {/* form */}
      <form className="add-new-form" onSubmit={(e) => OnFormSubmit(e)} id="form">
        {/* form head like name and closing modal button*/}
        <div className="form-head">
          <h1>Add New Task</h1>
          {/* modal closing button */}
          <button className="close-btn" onClick={()=>{props.ToggleModal()}}>
            &times;
          </button>
        </div>
        {/* form boby */}
        <div className="form-body">
          <label htmlFor="name" required>
            Task Name
          </label>
          <input type="text" className="input" name="name" id="name" required/>
          <label htmlFor="description">Description</label>
          <textarea
            cols={4}
            rows={6}
            type="text"
            className="input"
            name="description"
            id="description"
            required
          />
          <button className="add-btn">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewModal;
