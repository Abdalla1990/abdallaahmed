import React from 'react';
import RenderHelemt from '../RenderHelmet';
import { HashLink as Hash } from 'react-router-hash-link';

export const WebDevelopemnt = () => {
	return (
		<div className='web-development'>
			<RenderHelemt title='Ecoomerce Options Page' path='/ecoomerce-options' />
			<h2 className='label title'>Web Design & Development</h2>
			<div className='container'>
				<div className='text-wrapper no-padding'>
					<div className='text-container'>
						<p>
							A website is your gate to the digital world, it has to be as
							descriptive and self-explantory as possible. A proper content &
							images will defenitly reflic elegancy.
						</p>
					</div>
					<div className='text-container'>
						<p>
							Technologies used to build your site can vary based on many facts.
							One important aspect though, is how scalable and easy-to-enhance a
							website is. Building a website that is{' '}
							<strong>tiled to your needs </strong> and leverages some powerful
							tools that were created for exactly that purpose can make your{' '}
							<strong>clients happy</strong>.
						</p>
						<div className='image-container html'></div>
					</div>
					<div className='text-container'>
						<p>
							your website will be built by a mix of unique yet powerful
							components that formes an easy-to-integrate website which extends
							already existing technologies to benefit from their awesome work
							and eliminate any technical requirement needed to make use of it.
						</p>
					</div>
					<div className='text-container'>
						<p>
							<strong>
								<a href='https://html.com/'>Html</a> +{' '}
								<a href='https://reactjs.org/'>Javascript (React)</a> +{' '}
								<a href='https://developer.mozilla.org/en-US/docs/Web/CSS'>
									CSS
								</a>{' '}
								+ <a href='https://www.contentful.com'>Contentful (CMS)</a>
							</strong>
						</p>
						<p>
							By leveraging these technologies, changing content no longer
							requires code changes. It is easy to track events on your site to
							increase conversion rates or implment some A/B testing to determin
							your best business's moves.
						</p>
						<p>
							*Note : we can adjust this stack to whatever works best for your
							business.
						</p>
						<Hash className='btn btn-primary' to='#contact-me' smooth={true}>
							Contact Me
						</Hash>
					</div>
				</div>
			</div>
		</div>
	);
};
