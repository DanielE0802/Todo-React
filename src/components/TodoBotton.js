import React from 'react';
import { TaskContext } from '../context/TaskContext';
import { AddIcon } from '@chakra-ui/icons';
function TodoBotton() {
	const { modal, setModal, setEdit } = React.useContext(TaskContext);

	const showModal = () => {
		setModal(prevState => !prevState);
		setEdit(false);
	};

	return (
		<button className={`TodoBotton --border-radius ${modal ? '--equis' : ''}`} onClick={showModal}>
			<span className='TodoBotton-title title --hidden-desktop'>Crear ToDo</span>
			<span className='TodoBotton-icon icon plusIcons '>
				{' '}
				<AddIcon />
			</span>
		</button>
	);
}

export { TodoBotton };
