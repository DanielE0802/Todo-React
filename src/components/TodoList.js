import React, { Component } from "react";
import { TodoItem } from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {console.log(this.props.data)}
        {/* {this.props.data.forEach(todo => {
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          ></TodoItem>;
        })} */}

        {this.props.data.forEach((todo) => {
<div>
{/* <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}>

            </TodoItem> */}
    {console.log(todo.text)}
            <p>{todo.text}</p>
</div>
      
         
        })}
      </React.Fragment>
    );
  }
}

export { TodoList };
