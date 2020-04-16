import { Link } from 'react-router-dom';
import React from 'react';

export const Header = () => {
	return (
		<header className='main-header'>
			<div className='black'>
				<span>+1(236)-512-7117 </span>
				<span>info@abdallaahmed.co</span>
			</div>
			<span className='logo container'>
				<h1> -- Abdalla Ahmed -- </h1>
			</span>
			{/* <nav className='header container'>
				<ul className='header-container'>
					<li>
						<span>
							<Link to='/'>HOME</Link>
						</span>
					</li>
					<li>
						<span>
							<Link to='/projects'>PROJECTS</Link>
						</span>
					</li>
					<li>
						<span>
							<Link to='/about'>ABOUT</Link>
						</span>
					</li>
				</ul>
			</nav> */}
		</header>
	);
};
