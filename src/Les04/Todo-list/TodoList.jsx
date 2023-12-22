import React, { useEffect, useRef, useState } from "react";
import style from "./TodoList.module.css";
import { ListItem } from "./ListItem.jsx/ListItem";
export function TodoList() {

    // useEffect
    useEffect(()=>{
        document.title = "hello";
        console.log("new title");
    }, [])

  const input = useRef(null);
  const [display, setDisplay] = useState([]);

  const handleClick = () => {
    const item = input.current.value;
    if (item==='') {
        return;
    }
    setDisplay([
      ...display,
      <li className="list-group-item fs-3">
        <ListItem text={item} />
      </li>,
    ]);
    input.current.value = "";

  };

  return (
    <div className="container text-center">
      <h1>To-do's</h1>
      {/* <form> */}
      <div className="row">
        <div className="col-9 text-end">
          <input ref={input} className={"form-control"} type="text" />
        </div>
        <div className="col text-start">
          <button className="btn btn-primary" onClick={handleClick}>
          <i class="bi bi-plus-circle-dotted"></i>
          </button>
        </div>
      </div>
      {/* <input className={"form-control w-75"} type="text"></input>
          <button className="btn btn-primary">+</button> */}

      {/* </form> */}
      <ul className="list-group list-group-flush mt-3">{display}</ul>
    </div>
  );
}
