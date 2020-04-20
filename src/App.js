import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
	Header,
	HomePage,
	EcoommerceOptions,
	Footer,
	WebDevelopemnt
} from './components';
function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path='/web-development'>
					<WebDevelopemnt />
				</Route>
				<Route path='/ecommerce-options'>
					<EcoommerceOptions />
				</Route>
				<Route path='/'>
					<HomePage />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
