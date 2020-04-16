import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header, HomePage } from './components';
function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path='/about'>
					<div className='component-container'>
						<h1>About</h1>
					</div>
				</Route>
				<Route path='/projects'>
					<div className='component-container'>
						<h1>Projects</h1>
					</div>
				</Route>
				<Route path='/'>
					<HomePage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
