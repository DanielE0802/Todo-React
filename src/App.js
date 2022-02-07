import React from "react";
import { TodoBotton } from "./components/TodoBotton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearchInput } from "./components/TodoSearchInput";
import "./index.css"

let tasks = [
  {
    text: "Buenassss soy una tarea",
    completed: false,
  },
  {
    text: "Buenassss soy una tarea",
    completed: true,
  },
  {
    text: "Buenassss soy una tarea",
    completed: false,
  },
];

function App() {
  return (
    <React.Fragment>
      <TodoSearchInput />
      <TodoCounter />
      <TodoList data={tasks}></TodoList>
      {tasks.map((todo) => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
        ></TodoItem>
      ))}
      <TodoBotton />
    </React.Fragment>
  );
}

export default App;
