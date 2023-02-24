/* eslint-disable react/prop-types */
import React from 'react';
import { TaskContext } from '../context/TaskContext';

function SwitchModeTheme(props) {
	const { toggleColorMode, colorMode } = React.useContext(TaskContext);

	return (
		<>
			<div className={'Switch ' + colorMode} onClick={() => toggleColorMode()}>
				<div className='light-container'>
					<div className='light__content'>{props.children}</div>
				</div>
			</div>
		</>
	);
}

export { SwitchModeTheme };
