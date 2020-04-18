import React from 'react';
import MyForm from './MyForm';

export const Footer = () => {
	return (
		<>
			<div className='footer'>
				<div className='form-container'>
					<h2 className='form-label'>Lets Get In Touch</h2>
					<span className='form-description'>
						<p>
							Have a question, Need a quick consultancy, or want to learn more ?
						</p>
					</span>

					<MyForm />
				</div>
			</div>
			<div className='white-fotter'>
				<p>© COPYRIGHT 2020 | Abdalla Ahmed | All Right Reserved</p>
			</div>
		</>
	);
};
