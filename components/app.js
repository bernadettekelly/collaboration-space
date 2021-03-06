import React from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import SignIn from './page1_SignIn';
import SignUp from './page1_SignUp';
import Edit from './page2_Edit';
import Search from './page2_Search';
import Title from './title';
import LandingPage from './LandingPage';


export default function App(props) {
	return (
		<main>
			<Provider store={store}>
				<Router history={hashHistory}>
					<Route path="/" component={LandingPage} />
					<Route path="SignIn" component={SignIn} />
					<Route path="SignUp" component={SignUp} />
					<Route path="Search" component={Search} />
					<Route path="Edit" component={Edit} />
				</Router>
			</Provider>
		</main>
	)
}

