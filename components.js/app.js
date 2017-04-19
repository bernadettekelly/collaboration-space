import React from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

const SignUpWrapper = function() {
	return (
		<SignUp
			title = "Collaboration Space"
			subtitle= "Welcome to Collaboration Space - a place for New York City musicians to make connections and work together."/>
		);
}

