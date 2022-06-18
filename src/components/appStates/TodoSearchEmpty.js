/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Icon } from '@iconify/react';
import { TaskContext } from '../../context/TaskContext';

function TodoSearchEmpty() {
	const { search } = React.useContext(TaskContext);

	return (
		<div className='TodoSearchEmpty'>
			<Icon icon='carbon:warning' /> <h1>No encontramos ninguna tarea con "{search}" </h1>
		</div>
	);
}

export { TodoSearchEmpty };
