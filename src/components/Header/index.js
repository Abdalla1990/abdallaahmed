import { Link } from 'react-router-dom';
import React, { useMemo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';
export const Header = () => {
	const history = useHistory();
	const path = useMemo(() => history.location.pathname, [
		history.location.pathname
	]);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [path]);
	console.log({ path });
	const logoClassnames = cx('logo container', { 'black-logo': path !== '/' });
	return (
		<header className='main-header'>
			<div className='black'>
				<span>+1(236)-512-7117 </span>
				<span>info@abdallaahmed.co</span>
			</div>
			<span className={logoClassnames}>
				<h1> -- Abdalla Ahmed -- </h1>
			</span>
			<nav className='header container'>
				<ul className='header-container'>
					<li>
						<span>
							<Link to='/'>HOME</Link>
						</span>
					</li>
					<li>
						<span>
							<Link to='/ecommerce-options'>ECOMMERCE</Link>
						</span>
					</li>
					<li>
						<span>
							<Link to='/web-development'>WEB DESIGN</Link>
						</span>
					</li>
				</ul>
			</nav>
		</header>
	);
};
