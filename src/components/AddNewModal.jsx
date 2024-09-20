const AddNewModal = (props) => {

  function OnFormSubmit(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    props.AddNew(event.target.name.value,event.target.description.value);
    form.reset();
    props.ToggleModal();
  }


  return (
    <div className="add-new-Modal-container">
      <form className="add-new-form" onSubmit={(e) => OnFormSubmit(e)} id="form">
        <div className="form-head">
          <h1>Add New Task</h1>
          <button className="close-btn" onClick={()=>{props.ToggleModal()}}>
            &times;
          </button>
        </div>
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
