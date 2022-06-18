import { Icon } from '@iconify/react';

export const TodosError = () => {
	return (
		<div className='TodosError'>
			{' '}
			<Icon icon='clarity:warning-line' /> <h1>Ups... ha ocurrido un error.</h1>{' '}
		</div>
	);
};
