import React from 'react';
import MyForm from './MyForm';
import Map from './Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookSquare,
	faTwitterSquare,
	faInstagramSquare,
	faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
	return (
		<>
			<div className='footer' id='contact-me'>
				<div className='form-container'>
					<h2 className='form-label'>Lets Get In Touch</h2>
					<span className='form-description'>
						<p>
							Have a question, Need a quick consultancy, or want to hire me ?
						</p>
					</span>
					<MyForm />
				</div>
				<div className='about-the-business'>
					<div>
						<span>
							Phone: <p>(236)-512-7117</p>
						</span>
						<span>
							Email: <p>info@abdallaahmed.co</p>{' '}
						</span>
						<div className='footer-label'>
							<span>Find me here</span>
							<a href='https://www.facebook.com/abdallaAhmed1990'>
								<FontAwesomeIcon icon={faFacebookSquare} />
							</a>
							<a href='https://twitter.com/dev_abood'>
								<FontAwesomeIcon icon={faTwitterSquare} />
							</a>
							<a href='https://www.instagram.com/dev_abdalla/'>
								<FontAwesomeIcon icon={faInstagramSquare} />
							</a>
							<a href='https://github.com/Abdalla1990'>
								<FontAwesomeIcon icon={faGithubSquare} />
							</a>
						</div>
					</div>
					<Map />
				</div>
			</div>
			<div className='white-fotter'>
				<p>© COPYRIGHT 2020 | Abdalla Ahmed | All Right Reserved</p>
			</div>
		</>
	);
};
