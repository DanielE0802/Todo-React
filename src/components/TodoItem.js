import { Component } from "react";
import { Icon } from "@iconify/react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="TodoItem">
        <span  className={`Icon Icon-check ${
            this.props.completed && 'icon-check--completed'
          }`}
        >
          <Icon icon="akar-icons:check-box" />
        </span>
        <p>{this.props.text}</p>
        <span>
        <Icon icon="ep:circle-close-filled" />
        </span>
        
      </li>
    );
  }
}

export { TodoItem };
