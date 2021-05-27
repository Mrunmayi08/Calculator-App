import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import CompleteTasks from "./components/CompleteTask";
import IncompleteTasks from "./components/IncompleteTask";
import Header from "./components/Header";
import "./styles/AddTask.css";
import All from "./components/All";
import Navbar from "./components/Navbar";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([
    {
      id: Math.floor(Math.random() * 1000),
      value: "Singing",
      isComplete: false,
    },
  ]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTodo = (e) => {
    e.preventDefault();
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isComplete: false,
      };
      setTaskList([...taskList, taskDetails]);
      setTask("");
    }
  };

  const isCompleted = (e, id) => {
    e.preventDefault();
    const element = taskList.findIndex((elem) => elem.id == id);
    const newTaskList = [...taskList];
    newTaskList[element] = {
      ...newTaskList[element],
      isComplete: true,
    };
    setTaskList(newTaskList);
  };

  const deleteList = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.filter((t) => t.id != id));
  };

  return (
    <div>
      <Header />
      <input
        type="text"
        name="text"
        onChange={(e) => {
          handleChange(e);
        }}
        placeholder="Add your task here.."
        value={task}
      />
      <button onClick={AddTodo}>Add</button>

      <BrowserRouter>
        <div className="wrapper">
          <Navbar />
        </div>
        <Route
          path="/"
          exact
          component={() => (
            <All
              isCompleted={(e, id) => isCompleted(e, id)}
              deleteList={(e, id) => deleteList(e, id)}
              list={taskList}
            />
          )}
        />
        <Route
          path="/incomplete"
          component={() => <IncompleteTasks list={taskList} />}
        />
        <Route
          path="/complete"
          component={() => <CompleteTasks list={taskList} />}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
