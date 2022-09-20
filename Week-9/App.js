import "./styles.css";
import { useEffect, useState } from "react";

export default function App(props) {
  const [task, setTask] = useState("");
  const [array, setArray] = useState(["my first default task"]);
  function addToArray(event) {
    // console.log("task-", task);
    setArray([...array, task]);
    setTask("");
    // console.log(array);
  }

  function deleteItem(id) {
    setArray(array.filter((element, index) => index !== id));
    // console.log(id);
  }

  function reverseArray() {
    array.reverse();
    setArray([...array]);
  }
  const handleClick = (event) => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty("text-decoration");
    } else {
      event.target.style.setProperty("text-decoration", "line-through");
    }
  };
  return (
    <>
      <div className="todoContainer">
        <div className="todoInput">
          <input
            placeholder="Input the tasks here... "
            id="todoInput"
            value={task}
            onChange={(event) => {
              setTask(event.target.value);
            }}
          ></input>
          <button onClick={addToArray}>addTask</button>
        </div>
        <div className="output">
          <fieldset>
            <button onClick={reverseArray}>reverse</button>
            <legend>My todo list</legend>
            <div className="ArrayElementRender">
              {array.map((element, index) => {
                return (
                  <div className="List" key={index}>
                    <div onClick={handleClick}>{element} </div>
                    <button
                      onClick={() => deleteItem(index)}
                      title="Delete Task"
                    >
                      delete
                    </button>
                  </div>
                );
              })}
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
}
