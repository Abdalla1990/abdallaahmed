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
					<h1 className='heading-title'>
						<strong>Front-End </strong> Development &{' '}
						<strong>E-commerce</strong> Stores Developer
					</h1>
					<div className='button-container'>
						<Hash
							className='btn btn-primary cta'
							to='/contact-me'
							smooth={true}>
							Hire Me
						</Hash>
					</div>
				</div>
			</div>
		</div>
		<div className='text-wrapper'>
			<div className='text-container'>
				<p>
					Hi, I am <strong>Abdalla</strong>, a remote{' '}
					<strong>independent web developer</strong> based in{' '}
					<strong>Vancouver</strong>. I help businesses build better{' '}
					<strong>Web</strong> and <strong>Ecommerce experience</strong>
				</p>
			</div>
		</div>

		<TrustedBy />
		{/* <StaticSites />
		<EcommIntegration /> */}
	</>
);
