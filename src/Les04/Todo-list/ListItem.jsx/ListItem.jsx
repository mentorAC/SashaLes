import React from "react";

export function ListItem(props) {
  return (
    <div className="row text-center">

      <div className="col-6 p-2">{props.text}</div>

      <div className="col text-end">
        <button className="btn btn-outline-warning">
          <i class="bi bi-pencil-square"></i>
        </button>
      </div>
      <div className="col text-start">
        <button className="btn btn-outline-danger">
          <i class="bi bi-trash-fill"></i>
        </button>
      </div>
    </div>
  );
}
