import React from 'react';
import TrustedBy from './TrustedBy';
import EcommIntegration from './EcommIntegration';
import StaticSites from './StaticSites';
import RenderHelemt from '../RenderHelmet';
import { HashLink as Hash } from 'react-router-hash-link';
export const HomePage = ({ noHelmet = false }) => (
	<>
		{!noHelmet && <RenderHelemt title='Home Page' path='/' />}
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
					Hi, I am <strong>Abdalla</strong>, a remote{' '}
					<strong>independant web developer</strong> helping businesses build
					better <strong>Web</strong> and <strong>Ecommerce experiance</strong>{' '}
					By leveraging awesome tools which are built to help scale and boost
					businesses' <strong>online presence.</strong>
				</p>
				<Hash className='btn btn-primary' to='#contact-me' smooth={true}>
					Contact Me
				</Hash>
			</div>
		</div>

		<TrustedBy />
		<StaticSites />
		<EcommIntegration />
	</>
);
