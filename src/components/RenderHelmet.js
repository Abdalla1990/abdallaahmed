import React from 'react';
import { Helmet } from 'react-helmet';

const RenderHelemt = ({ title, path }) => {
	const canonicalLink =
		path !== '/'
			? `https://www.abdallaahmed.co${path}`
			: 'https://www.abdallaahmed.co';
	const originalTitle = document.title.split('|');

	const pageTitle = title
		? document.title
				.split('|')
				.slice(0, originalTitle.length - 1)
				.join(' | ') +
		  ' | ' +
		  title.toUpperCase()
		: document.title;
	return (
		<Helmet>
			<meta charSet='utf-8' />
			<title>{pageTitle}</title>
			<link rel='canonical' href={canonicalLink} />
		</Helmet>
	);
};

export default RenderHelemt;
