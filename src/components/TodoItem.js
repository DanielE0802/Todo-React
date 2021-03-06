import { Icon } from '@iconify/react';
import React from 'react';
import { TaskContext } from '../context/TaskContext';
import PropTypes from 'prop-types';

TodoItem.propTypes = {
	category: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	completeTask: PropTypes.func.isRequired,
	deleteTask: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

function TodoItem(props) {
	const { setEdit, setModal, setIdEdit } = React.useContext(TaskContext);

	const editTask = event => {
		setModal(true);
		setEdit(true);
		setIdEdit(event.target.attributes.id.nodeValue);
	};

	let nameOfCategory = '';

	switch (props.category) {
		case 'work':
			nameOfCategory = 'Trabajo';
			break;

		case 'beach-access':
			nameOfCategory = 'Vacaciones';
			break;

		case 'school':
			nameOfCategory = 'Estudio';
			break;

		case 'home':
			nameOfCategory = 'Hogar';
			break;

		default:
			break;
	}

	return (
		<li className={`TodoItem  ${props.completed && 'item--completed'} `}>
			<span className={`Icon Icon-check ${props.completed && 'icon-check--completed'}`}>
				<Icon onClick={props.completeTask} icon='akar-icons:check-box' />
			</span>
			<p className='title'>{props.text}</p>

			<div className='TodoItem-category-icons'>
				<span className='iconify' data-icon={`ic:outline-${props.category}`}></span>
				<div className='Icon-tooltip'>{nameOfCategory}</div>
			</div>
			<div className='line'></div>
			<p className='description'>{props.description}</p>
			<div id={props.id} onClick={editTask} className='edit-container'>
				<Icon icon='akar-icons:edit' />
				<div className='Icon-tooltip'>Editar</div>
			</div>

			<span className='close'>
				<Icon onClick={props.deleteTask} icon='eva:close-fill' />
			</span>
		</li>
	);
}

export { TodoItem };
