import { Link } from 'react-router-dom';
import React, { useMemo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';
export const Header = () => {
	const history = useHistory();
	const path = useMemo(() => history.location.pathname, [
		history.location.pathname,
	]);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [path]);
	const logoClassnames = cx('logo container', { 'black-logo': path !== '/' });

	return (
		<header className='main-header'>
			<div className='black'>
				<span>+1(236)-512-7117 </span>
				<span>info@abdallaahmed.co</span>
			</div>

			<span className={logoClassnames}>
				<Link to='/'>
					<h1> -- Abdalla Ahmed -- </h1>
				</Link>
			</span>

			{/* <nav className='header container'>
				<ul className='header-container'>
					<li>
						<span className={path === '/ecommerce-options' ? 'selected' : null}>
							<Link to='/ecommerce-options'>ECOMMERCE</Link>
						</span>
					</li>
					<li>
						<span className={path === '/web-development' ? 'selected' : null}>
							<Link to='/web-development'>WEB DESIGN</Link>
						</span>
					</li>
				</ul>
			</nav> */}
		</header>
	);
};
