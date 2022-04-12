import React from "react";

function TodoCounter({completed,total}) {
  return (
    <React.Fragment>
      <h2 className="numberTasks">Has realizado {completed} de {total} tareas</h2>
    </React.Fragment>
  );
}

export {TodoCounter}