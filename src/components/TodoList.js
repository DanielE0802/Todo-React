import React from "react";

function TodoList(props) {

  // Destructuring 
  const { loading, searchedTasks,error, onEmpty, render, onError, onLoading } = props;

  return (
    <>
      <section className={loading || searchedTasks.length > 0 ? "TodoList container" : "container"} >
        {error && onError()}
        {loading && onLoading()}

        {!loading && searchedTasks.length < 1 && onEmpty()}

        {searchedTasks.map(render)}

        </section>
    </>
  )
}

export { TodoList };
