import { useState } from "react";
import { AppUI } from "./AppUI";
import "../scss/todoStyle.scss";
import {useLocalStorage} from '../hooks/useLocalStorage'


function App() {
  const{ item: tasks,
    saveItem :saveTasks,
    loading} = useLocalStorage("TASKS_V1", []);

  let searchedTasks = [];

  // Todo Input search
  const [search, setSearch] = useState("");

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

  const deleteTask = (text) => {
    if (!window.confirm("Are you sure you want to delete this task")) {
    } else {
      const taskIndex = tasks.findIndex((task) => task.text === text);
      const newTask = [...tasks];
      newTask.splice(taskIndex, 1);
      saveTasks(newTask);
    }
  };

  if (!search.length > 1) {
    searchedTasks = tasks;
  } else {
    searchedTasks = tasks.filter((task) => {
      const taskText = task.text.toLowerCase();
      const searchText = search.toLowerCase();
      return taskText.includes(searchText);
    });
  }

  return (
    <AppUI
      loading={loading}
      completedTasks={completedTasks}
      totalTasks={totalTasks}
      search={search}
      setSearch={setSearch}
      setTasks={saveTasks}
      tasks={tasks}
      searchedTasks={searchedTasks}
      deleteTask={deleteTask}
      completeTask={completeTask}
    />
  );
}

export default App;
