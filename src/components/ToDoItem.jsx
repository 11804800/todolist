const ToDoItem=(props)=>{
    return (
        <div className="item-container" key={props.item.id}>
            <div >
              <input type="checkbox" checked={props.item?.completed}/>
              <p style={{textDecoration:`${props.item?.completed ? "line-through" : "none"}`}}>{props.item.name}</p>
            </div>
            <button className="toggle-desc">
                ^
            </button>
        </div>
    )
}

export default ToDoItem;