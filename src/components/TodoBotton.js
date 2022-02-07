import { Component } from "react";

class TodoBotton extends Component {
  buttonEvent(msg) {
    console.log(msg);
  }

  render() {
    return (
      <button className="TodoBotton" 
      onClick={() => this.buttonEvent("Click")}>
        Crear ToDo
      </button>
    );
  }
}

export { TodoBotton };
