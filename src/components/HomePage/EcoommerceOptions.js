import React from 'react';
export const EcoommerceOptions = () => {
	return (
		<div className='ecommerce-options'>
			<h2 className='label'>You Best Ecommerce Option</h2>
			<div className='container'>
				<div className='text-wrapper no-padding'>
					<div className='text-container'>
						<p>
							Building an online store can be achieved in many ways. some
							options might seem easier, cost effictive and faster. However they
							might cost you more on the long run as they require more
							mantaininace and it can be hard to expand. Integrating any custom
							made tools required by the business might even cost you more.
							These systems are known as <strong>monolithic module</strong>.
						</p>
					</div>
					<div className='text-container'>
						<p>
							A custom made system can serve your business in a more effictive
							and easy to scale way. With the{' '}
							<strong>minimal technical skills needed</strong>, building a store
							that is <strong>tiled to your needs </strong> and leverages some
							powerful tools that were created for exactly that purpose can make
							your business <strong>seemlessly grow like never before</strong>.
							This is known as <strong>microservices module</strong>.
						</p>
						<div className='image-container monolithic'></div>
					</div>
					<div className='text-container'>
						<p>
							After an{' '}
							<strong>extensive range of ecommerce implmentations</strong>, a
							mix of unique yet powerful components that formes an
							easy-to-integrate ecommerce framework which extends already
							existing technologies to benefit from their awesome work and
							eliminate any technical requirement needed to make yuse of it.
						</p>
					</div>
					<div className='text-container'>
						<p>
							<strong>
								<a href='https://www.contentful.com'>Contentful</a> +{' '}
								<a href='https://www.shopify.com'>Shopify</a> + Javascript
							</strong>
						</p>
						<p>
							By leveraging these technologies, changing content no longer
							requires code changes. Tracking inventory or fulfilment became
							easier than never before. Contentful acts as a{' '}
							<a
								alt='what is a cms'
								href='https://kinsta.com/knowledgebase/content-management-system/'>
								CMS
							</a>{' '}
							wheras shopify acts as an{' '}
							<a
								alt='what inventory and management system '
								href='https://www.shopify.com/enterprise/order-management-system-oms'>
								OMS
							</a>{' '}
						</p>
						<p>
							*Note : we can adjust this stack to whatever works best for your
							business.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
