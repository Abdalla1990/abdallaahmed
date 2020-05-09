import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
	Header,
	HomePage,
	// EcoommerceOptions,
	Footer,
	// WebDevelopemnt,
	ContactMe,
} from './components';

export const ServerApp = ({ noHelmet }) => (
	<>
		<Header />
		<Switch>
			{/* <Route path='/web-development'>
				<WebDevelopemnt noHelmet={noHelmet} />
			</Route>
			<Route path='/ecommerce-options'>
				<EcoommerceOptions noHelmet={noHelmet} />
			</Route> */}
			<Route path='/'>
				<HomePage noHelmet={noHelmet} />
			</Route>
		</Switch>
		<Footer />
	</>
);
function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path='/contact-me'>
					<ContactMe />
				</Route>
				{/* <Route path='/web-development'>
					<WebDevelopemnt />
				</Route>
				<Route path='/ecommerce-options'>
					<EcoommerceOptions />
				</Route> */}
				<Route path='/'>
					<HomePage />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
