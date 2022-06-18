import { Icon } from '@iconify/react';

export const TodosEmpty = () => {
	return (
		<div className='TodosEmpty'>
			<Icon icon='carbon:warning' /> <h1>Crea tu primera tarea</h1>
		</div>
	);
};
