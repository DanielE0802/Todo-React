import { Fragment } from "react";
import { TodoBotton } from "../components/TodoBotton";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearchInput } from "../components/TodoSearchInput";
import { CheckIcon } from "@chakra-ui/icons";
import { CircularProgress } from "@chakra-ui/react";
import { TaskContext } from "../context/TaskContext";
import React from "react";
import { Modal } from "../components/Modal";
import { FormModal } from "../components/FormModal";

function AppUI() {
  const { loading, error, searchedTasks, completeTask, deleteTask } =
    React.useContext(TaskContext);

  return (
    <Fragment>
      <h1 className="name-logo">
        <CheckIcon />
        TODO APP
      </h1>
      <TodoCounter />
      <TodoSearchInput />

      <TodoList>
        {error && <p>Errorrrrr</p>}
        {loading && (
          <CircularProgress
            className="loading-icon"
            isIndeterminate
            color="#651FFF"
          />
        )}
        {!loading && searchedTasks.length < 1 && <p>Crea tu primera tarea</p>}
        {searchedTasks.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            description={todo.description}
            category={todo.category}
            completed={todo.completed}
            completeTask={() => completeTask(todo.text)}
            deleteTask={() => deleteTask(todo.text)}
          ></TodoItem>
        ))}
      </TodoList>
       <Modal>
          <FormModal />
      </Modal>


      <div className="toolbar container">
        <TodoBotton />
      </div>
    </Fragment>
  );
}

export { AppUI };
