import PropTypes from 'prop-types';

TodoList.propTypes = {
	loading: PropTypes.bool.isRequired,
	tasks: PropTypes.array.isRequired,
	searchedTasks: PropTypes.array.isRequired,
	error: PropTypes.bool.isRequired,
	onEmpty: PropTypes.func.isRequired,
	render: PropTypes.func.isRequired,
	onError: PropTypes.func.isRequired,
	onLoading: PropTypes.func.isRequired,
	onSearchEmpty: PropTypes.func.isRequired,
};

function TodoList(props) {
	// Destructuring
	const { loading, searchedTasks, error, onEmpty, render, onError, onLoading, tasks, onSearchEmpty } = props;

	return (
		<>
			{loading && <section className='TodoList container list-loading'> {onLoading()} </section>}

			{!loading && (
				<section className={!loading && searchedTasks.length > 0 ? 'TodoList container' : 'container'}>
					{error && onError()}

					{tasks.length < 1 && onEmpty()}
					{searchedTasks.length < 1 && tasks.length > 0 && onSearchEmpty()}

					{searchedTasks.map(render)}
				</section>
			)}
		</>
	);
}

export { TodoList };
