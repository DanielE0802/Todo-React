import { Fragment } from "react";
import { TodoBotton } from "../components/TodoBotton";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearchInput } from "../components/TodoSearchInput";
import { CheckIcon } from "@chakra-ui/icons";
import {CircularProgress} from "@chakra-ui/react"

function AppUI({
  loading,
  error,
  completedTasks,
  totalTasks,
  search,
  setSearch,
  tasks,
  searchedTasks,
  completeTask,
  setTasks,
  deleteTask,
}) {
  return (
    <Fragment>
      <h1 className="name-logo">
        <CheckIcon />
        TODO APP
      </h1>
      <TodoCounter completed={completedTasks} total={totalTasks} />
      <TodoSearchInput
        search={search}
        setSearch={setSearch}
        tasks={tasks}
        setTasks={setTasks}
      />



      <TodoList>
      {error && <p>Errorrrrr</p>}
      {loading && <CircularProgress className="loading-icon" isIndeterminate color='#651FFF' />}
      {(!loading && searchedTasks.length < 1) && <p>Crea tu primera tarea</p>}
        {searchedTasks.map((todo) => (  
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            completeTask={() => completeTask(todo.text)}
            deleteTask={() => deleteTask(todo.text)}
          ></TodoItem>
        ))}
      </TodoList>

      <div className="toolbar container">
        <TodoBotton />
      </div>
    </Fragment>
  );
}

export { AppUI };
