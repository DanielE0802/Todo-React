import '../../scss/appStatesStyles.scss';

export const TodosLoading = () => {
	return (
		<>
			<div className='loading-todo'>
				<p className='loading-title'></p>
				<p className='loading-content'></p>
				<span className='loading-delete-icon'></span>
			</div>
			<div className='loading-todo'>
				<p className='loading-title'></p>
				<p className='loading-content'></p>
				<span className='loading-delete-icon'></span>
			</div>
			<div className='loading-todo'>
				<p className='loading-title'></p>
				<p className='loading-content'></p>
				<span className='loading-delete-icon'></span>
			</div>
		</>
	);
};
