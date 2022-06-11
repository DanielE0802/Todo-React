import { Fragment } from "react";
import { TodoBotton } from "../components/TodoBotton";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearchInput } from "../components/TodoSearchInput";
import { CheckIcon } from "@chakra-ui/icons";
import { TaskContext } from "../context/TaskContext";
import React from "react";
import { Modal } from "../components/Modal";
import { FormModal } from "../components/FormModal";
import { User } from "../components/User";
import { TodosLoading } from "../components/appStates/TodosLoading";

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
            <TodosLoading></TodosLoading>
        )}
        {!loading && searchedTasks.length < 1 && <p>Crea tu primera tarea</p>}
        {searchedTasks.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            description={todo.description}
            category={todo.category}
            id={todo.id}
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

          <User></User>

    </Fragment>
  );
}

export { AppUI };
