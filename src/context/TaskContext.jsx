import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TaskContext = React.createContext();

function TaskProvider(props) {
  const {
    item: tasks,
    saveItem: saveTasks,
    loading,
    error,
  } = useLocalStorage("TASKS_V1", []);

  let searchedTasks = [];

  // Todo Input search
  const [search, setSearch] = useState("");

  if (!search.length > 1) {
    searchedTasks = tasks;
  } else {
    searchedTasks = tasks.filter((task) => {
      const taskText = task.text.toLowerCase();
      const searchText = search.toLowerCase();
      return taskText.includes(searchText);
    });
  }

  // Todo counter
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  // Toggle completed tasks

  const completeTask = (text) => {
    const taskIndex = tasks.findIndex((task) => task.text === text);
    const newTask = [...tasks];
    newTask[taskIndex].completed = !newTask[taskIndex].completed;
    saveTasks(newTask);
  };

  // Create Task

  const addTask = (text) => {
    const newTask = [...tasks];
    newTask.push({
      completed: false,
      text: text
    })
    saveTasks(newTask);
  };

    // Modal

    const [modal,setModal] = useState(false)

  const deleteTask = (text) => {
    if (!window.confirm("Are you sure you want to delete this task")) {
    } else {
      const taskIndex = tasks.findIndex((task) => task.text === text);
      const newTask = [...tasks];
      newTask.splice(taskIndex, 1);
      saveTasks(newTask);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        loading,
        error,
        totalTasks,
        search,
        setSearch,
        tasks,
        searchedTasks,
        completeTask,
        modal,setModal,
        completedTasks,
        addTask,
        // setTasks,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export { TaskProvider, TaskContext };
