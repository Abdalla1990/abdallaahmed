import React from 'react';
import TrustedBy from './TrustedBy';
import EcommIntegration from './EcommIntegration';

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
		<div className='text-wrapper'>
			<div className='text-container'>
				<p>
					Hi, I am Abdalla, a remote <strong>independant engineer</strong>{' '}
					helping businesses build a better{' '}
					<strong>Ecommerce experiance</strong> By leveraging awesome tools
					which are built to help scale and boost businesses'
					<strong>online presence.</strong>
				</p>
			</div>
		</div>

		<TrustedBy />
		<EcommIntegration />
	</>
);
