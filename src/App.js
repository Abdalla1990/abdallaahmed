import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, HomePage, EcoommerceOptions, Footer } from './components';
function App() {
	console.log({ Router });
	return (
		<Router>
			<Header />
			<Switch>
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
