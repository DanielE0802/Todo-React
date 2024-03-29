import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Swal from 'sweetalert2';
import { useColorMode } from '@chakra-ui/react';
import PropTypes from 'prop-types';

TaskProvider.propTypes = {
	children: PropTypes.object.isRequired,
};

const TaskContext = React.createContext();

function TaskProvider(props) {
	const { item: tasks, saveItem: saveTasks, loading, error } = useLocalStorage('TASKS_V1', []);

	let searchedTasks = [];

	// Todo Input search
	const [search, setSearch] = useState('');

	const [edit, setEdit] = useState('');
	const [idEdit, setIdEdit] = useState('');

	if (!search.length > 3) {
		searchedTasks = tasks;
	} else {
		searchedTasks = tasks.filter(task => {
			const taskText = task.text.toLowerCase();
			const searchText = search.toLowerCase();
			return taskText.includes(searchText);
		});
	}

	// Todo counter
	const completedTasks = tasks.filter(task => task.completed).length;
	const totalTasks = tasks.length;

	// Toggle completed tasks

	const completeTask = text => {
		const taskIndex = tasks.findIndex(task => task.text === text);
		const newTask = [...tasks];
		newTask[taskIndex].completed = !newTask[taskIndex].completed;
		saveTasks(newTask);
	};

	// Edit tasks
	const editTask = objeto => {
		const taskIndex = tasks.findIndex(task => task.id === objeto[3]);
		const newTask = [...tasks];
		newTask[taskIndex].text = objeto[0];
		newTask[taskIndex].description = objeto[1];
		newTask[taskIndex].category = objeto[2];
		saveTasks(newTask);
	};

	// const editTask = (objeto) => {
	//   let setObject = {
	//     title: objeto[0],
	//     description: objeto[1],
	//     category: objeto[2],
	//   };

	//   const requestOptions = {
	//     method: "POST",
	//     headers: { "Content-Type": "application/json" },
	//     body: setObject,
	//   };

	//   fetch("http://localhost:3001/notes/add/", requestOptions).then((response) =>
	//     console.log(response)
	//   );

	//   const taskIndex = tasks.findIndex((task) => task.id === objeto[3]);
	//   const newTask = [...tasks];
	//   newTask[taskIndex].text = objeto[0];
	//   newTask[taskIndex].description = objeto[1];
	//   newTask[taskIndex].category = objeto[2];
	//   saveTasks(newTask);
	// };

	// Create Task

	const addTask = objeto => {
		const id = 'id' + Math.random().toString(16).slice(2);
		const newTask = [...tasks];
		newTask.push({
			completed: false,
			text: objeto[0],
			description: objeto[1],
			category: objeto[2],
			id,
		});
		saveTasks(newTask);
	};

	// Modal

	const [modal, setModal] = useState(false);

	const deleteTask = text => {
		Swal.fire({
			title: '¿Deseas eliminar esta tarea?',
			text: '¡No podras revertir esto!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, eliminar!',
		}).then(result => {
			if (result.isConfirmed) {
				Swal.fire('Tarea eliminada correctamente!', '', 'success');

				const taskIndex = tasks.findIndex(task => task.text === text);
				const newTask = [...tasks];
				newTask.splice(taskIndex, 1);
				saveTasks(newTask);
			}
		});
	};

	// theme

	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<TaskContext.Provider
			value={{
				toggleColorMode,
				loading,
				colorMode,
				error,
				totalTasks,
				search,
				setSearch,
				tasks,
				searchedTasks,
				completeTask,
				modal,
				setModal,
				completedTasks,
				addTask,
				// setTasks,
				deleteTask,
				edit,
				setEdit,
				editTask,
				idEdit,
				setIdEdit,
			}}
		>
			{props.children}
		</TaskContext.Provider>
	);
}

export { TaskProvider, TaskContext };
