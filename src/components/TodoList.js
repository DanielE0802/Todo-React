import React from "react";

function TodoList(props) {
  return (
    <section className="TodoList container">
      {props.children}
    </section>
  );
}

export { TodoList };
