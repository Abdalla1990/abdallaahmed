import React, { useState, useCallback } from 'react';
import Modal from '../Modal';
import { Link } from 'react-router-dom';
const EcommerceIntegration = () => {
	const [modalOpen, setModaslOpen] = useState(true);
	// const handleOnClose = useCallback(() => {
	// 	modalOpen && setModaslOpen(false);
	// }, [modalOpen]);

	return (
		<>
			<h2 className='label'>Ecommerce Integration</h2>

			<div className='text-wrapper no-padding'>
				<h3 className='label not-title'>
					I use <strong>top technologies </strong> to produce awesome results
				</h3>
				<div className='text-container'>
					<div className='black'>
						<a href='https://www.shopify.com'>
							<div className='image-container ecomm-brands shopify'></div>
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
								Gain the previlage to <strong>grow & scale</strong> your
								business faster, by using the <strong>right tools</strong> to
								build a <strong>shiny & neat</strong> online store, so that you
								can focus on what matters the most, <strong>Sales ;)</strong>
							</p>
						</div>
					</div>
					<Link className='btn btn-primary' to='/ecommerce-options'>
						Know More
					</Link>
				</div>
			</div>

			{/* {modalOpen && (
				<Modal onClose={handleOnClose}>
					{' '}
					<EcoomerceOptions />
				</Modal>
			)} */}
		</>
	);
};

export default EcommerceIntegration;
