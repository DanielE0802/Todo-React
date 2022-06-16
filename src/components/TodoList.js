import React from "react";

function TodoList(props) {

  // Destructuring 
  const { loading, searchedTasks, error, onEmpty, render, onError, onLoading, tasks, onSearchEmpty } = props;

  return (
    <>
      {loading && <section className="TodoList container list-loading"> {onLoading()} </section>}

      {!loading &&
            <section className={!loading && searchedTasks.length > 0 ? "TodoList container" : "container"} >
            {error && onError()}
    
            {!loading && tasks.length < 1 && onEmpty()}
            {!loading && searchedTasks.length < 1 && onSearchEmpty()}
    
            {searchedTasks.map(render)}
    
          </section>
      }



    </>
  )
}

export { TodoList };
