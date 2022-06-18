import { createPortal } from 'react-dom';

function Modal({ children }) {
	return createPortal(children, document.getElementById('modal'));
}

export { Modal };
