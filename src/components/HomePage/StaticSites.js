import React from 'react';
import { Link } from 'react-router-dom';
const StaticSites = () => {
	return (
		<>
			<h2 className='label'>Website Design & Development</h2>
			<div className='text-wrapper no-padding'>
				<div className='text-container'>
					<div className='image-container skitch'></div>
					<div className='black'>
						<a href='https://www.codewall.co.uk/html-css-and-javascript-explained-for-beginners/'>
							<div className='image-container ecomm-brands html'></div>
						</a>
						<div className='image-container ecomm-brands'> + </div>
						<a href='https://www.contentful.com'>
							<div className='image-container ecomm-brands contentful'></div>
						</a>
						<div className='image-container ecomm-brands'> + </div>
						<a href='https://reactjs.org/'>
							<div className='image-container ecomm-brands react'></div>
						</a>
					</div>
					<div className='text-wrapper no-padding'>
						<div className='text-container'>
							<p>
								<strong>Building websites that Keep customers Engaged.</strong>{' '}
								When someone visits your website, it’s important that they stay
								engaged with a <strong>beautiful website design.</strong>{' '}
								Otherwise, they leave and move onto the next one. We know you
								don’t want that. Web visitors are more likely to stay on a site
								that is <strong>neatly designed.</strong>
							</p>
						</div>
					</div>
					<Link className='btn btn-primary' to='/web-development'>
						Learn More
					</Link>
				</div>
			</div>
		</>
	);
};

export default StaticSites;
