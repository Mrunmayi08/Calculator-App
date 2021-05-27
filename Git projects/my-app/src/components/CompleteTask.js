import React from "react";
import "../styles/Navbar.css";
import "../styles/ListItems.css";

const CompleteTasks = (props) => {
  return (
    <div>
      {props.list.length > 0 && (
        <ul>
          {props.list.map((task) => {
            return task.isComplete && <li>{task.value}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default CompleteTasks;
