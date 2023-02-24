import { AppUI } from './AppUI';
import '../scss/todoStyle.scss';
import { TaskProvider } from '../context/TaskContext';

function App() {
	return (
		<TaskProvider>
			<AppUI />
		</TaskProvider>
	);
}

export { App };
