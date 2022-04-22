import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Swal from 'sweetalert2'
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

  const addTask = (objeto) => {
    const newTask = [...tasks];
    newTask.push({
      completed: false,
      text: objeto[0],
      description: objeto[1],
      category: objeto[2]
    })
    saveTasks(newTask);
  };

    // Modal

    const [modal,setModal] = useState(false)

  const deleteTask = (text) => {

    Swal.fire({
      title: '¿Deseas eliminar esta tarea?',
      text: "¡No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Tarea eliminada correctamente!',
          '',
          'success'
        )

        const taskIndex = tasks.findIndex((task) => task.text === text);
        const newTask = [...tasks];
        newTask.splice(taskIndex, 1);
        saveTasks(newTask);
      
      }
    })
    



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
