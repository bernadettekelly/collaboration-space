import React from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

//const SignUpWrapper = function() {
//	return (
//		<SignUp
//			title = "Collaboration Space"
//			subtitle= "Welcome to Collaboration Space - a place for New York City musicians to make connections and work together."/>
//		);
//}

export default function App(props) {
	return (
		<main>
			<Provider store={store}>
				Router history={hashHistory}>
					<Route path="/" component={SignUp}) />
					<Route path="SignIn" component={SignIn} />
					<Route path="Search" component={Search} />
					<Route path="Edit" component={Edit} />
				<Router>
			</Provider>
		</main>
	)
}

