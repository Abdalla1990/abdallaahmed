import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const Modal = ({ onClose, children }) => {
	return (
		<div className='modal open'>
			<div className='close' onClick={onClose}>
				<FontAwesomeIcon icon={faTimes} />
			</div>
			{children}
		</div>
	);
};

export default Modal;
