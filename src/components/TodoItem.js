import { Icon } from "@iconify/react";


function TodoItem(props) {

  return (
    <li className={`TodoItem  ${
      props.completed && "item--completed"
    } `}>
      <span
        className={`Icon Icon-check ${
          props.completed && "icon-check--completed"
        }`}
      >
        <Icon onClick={props.completeTask} icon="akar-icons:check-box" />
      </span>
      <p className="title">{props.text}</p>
        <div className="line"></div>


      <span className="close">
      <Icon  onClick={props.deleteTask} icon="eva:close-fill" />
      </span>
    </li>
  );
}

export { TodoItem };
