import React, { useCallback } from 'react';
export const ContactMe = () => {
	const isMobile = useCallback(() => {
		return document && document.body.clientWidth <= 576;
	}, []);

	return !isMobile() ? (
		<>
			<div className='hero-banner-container'>
				<div className='image-container contact-me'></div>

				<div className='image-content'>
					<div className='content'>
						<h3>Lets craft something beautiful together</h3>
						<p></p>
					</div>
				</div>
			</div>
		</>
	) : null;
};
