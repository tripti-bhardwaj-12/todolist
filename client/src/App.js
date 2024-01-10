import { useEffect, useState } from "react";
import ToDo from "./components/Todo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div
        className="container m-auto card p-5 mt-5"
        style={{ height: "600px" }}
      >
        <h1>ToDo App</h1>

        <div className="top mt-3 d-flex justify-content-center gap-1 ">
          <input
            type="text"
            placeholder="Add ToDos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          
          <button type="button" className="btn btn-success px-4" onClick={
              isUpdating
                ? () =>
                    updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }>{isUpdating ? "Update" : "Add"}</button>
        </div>

        <div className="list w-50 mx-auto">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
