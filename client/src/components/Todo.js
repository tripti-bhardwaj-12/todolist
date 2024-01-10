import React from "react";

const ToDo = ({text,updateMode,deleteToDo}) => {
  return (
    <div className="todo">
      <div className="text">{text} </div>
      <div className="icons">
        <span className="material-symbols-outlined" onClick={updateMode}>edit</span>
        <span className="material-symbols-outlined" onClick={deleteToDo}>delete</span>
      </div>
    </div>
  );
};

export default ToDo;
