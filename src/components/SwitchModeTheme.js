import React from 'react';
import { TaskContext } from '../context/TaskContext';

function SwitchModeTheme() {
	const { toggleColorMode, colorMode } = React.useContext(TaskContext);

	return (
		<>
			<div className={'Switch ' + colorMode} onClick={() => toggleColorMode()}>
				<div className='light-container'>
					<div className='light__content'></div>
				</div>
				<div className='dark-container__content'>
					<div className='dark__content'></div>
				</div>
			</div>
		</>
	);
}

export { SwitchModeTheme };
