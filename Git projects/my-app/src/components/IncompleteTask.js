import React from "react";
import "../styles/Navbar.css";
import "../styles/ListItems.css";

const IncompleteTasks = (props) => {
  return (
    <div>
      {props.list !== [] && (
        <ul>
          {props.list.map((task) => {
            return !task.isComplete && <li>{task.value}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default IncompleteTasks;
