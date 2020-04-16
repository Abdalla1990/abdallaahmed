import React from 'react';
import TrustedBy from './TrustedBy';
import Footer from './Footer';
export const HomePage = () => (
	<>
		<div className='hero-banner-container'>
			<div className='image-container'>
				<div className='overlay-container'></div>
			</div>

			<div className='image-content'>
				<div className='content'>
					<h3>
						<strong>Front-End </strong> Development &{' '}
						<strong>E-commerce</strong> Stores Developer
					</h3>
				</div>
			</div>
		</div>
		<div className='who-i-am'>
			<div className='text-container'>
				<p>
					Hi, I am Abdalla, a remote <strong>independant engineer</strong>{' '}
					helping businesses build a better{' '}
					<strong>E-commerce experiance</strong> By leveraging awesome tools
					which are built to help scale and boost businesses'
					<strong>online presens.</strong> <underline>Learn More</underline> or{' '}
					<underline>Hire Me</underline>
				</p>
			</div>
		</div>

		<TrustedBy />
		<Footer />
	</>
);
