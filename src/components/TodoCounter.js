import React from "react";

import {TaskContext} from '../context/TaskContext'

function TodoCounter() {
  
  const {completedTasks:completed,totalTasks : total} = React.useContext(TaskContext)

  return (
    <React.Fragment>
      <h2 className="numberTasks">Has realizado {completed} de {total} tareas</h2>
    </React.Fragment>
  );
}

export {TodoCounter}