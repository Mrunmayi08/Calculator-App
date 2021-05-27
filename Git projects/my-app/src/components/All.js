import React, { useState } from "react";
import "../styles/ListItems.css";
import "../styles/Navbar.css";

const All = (props) => {
  return (
    <div>
      {props.list.length > 0 && (
        <ul>
          {props.list.map((task) => {
            return (
              <li>
                {task.value}
                <button
                  className="completed"
                  onClick={(e) => props.isCompleted(e, task.id)}
                >
                  Completed
                </button>
                <button
                  className="delete"
                  onClick={(e) => props.deleteList(e, task.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default All;
