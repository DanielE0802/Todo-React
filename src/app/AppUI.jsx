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

// States ToDos
import { TodosLoading } from "../components/appStates/TodosLoading";
import { TodosError } from "../components/appStates/TodosError";
import { TodosEmpty } from "../components/appStates/TodosEmpty";

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

      <TodoList
        error={error}
        loading={loading}
        searchedTasks={searchedTasks}
        // Render props
        onError={() => <TodosError></TodosError>}
        onLoading={() => <TodosLoading></TodosLoading>}
        onEmpty={() => <TodosEmpty></TodosEmpty>}
        render={(todo) => (
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
        )}
      />

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
