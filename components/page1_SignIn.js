import React from 'react';
import {connect} from 'react-redux';
import {Link, hashHistory} from 'react-router';
import Title from './title';
import * as userActions from '../actions/index';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.fetchLogInSuccess = this.fetchLogInSuccess.bind(this);
    }

    //componentDidUpdate(){
    //	console.log("::UPDATED::", this.props.appData.userData);
    //	if(this.props.appData.userData) hashHistory.push('/Search');
    //}

    fetchLogInSuccess(e) {
    	e.preventDefault();
    	console.log('Click on login');
    	this.props.dispatch(userActions.fetchLogIn(this.refs.username.value, this.refs.password.value));
    }

render(){
	const {appData} = this.props; 
	return (
		<div>
			<Title/>
			<section id="SignInSection">
				<div className="SignInTitle">Log In</div>
				<div className="columns">
          			<div className="column is-one-quarter">
						<div className="field">
  							<label htmlFor="label">Username</label>
  							<p className="control">
    						<input className="input" type="text" ref="username"/>
  							</p>
						</div>
					</div>
				</div>

           		<div className="columns">
          			<div className="column is-one-quarter">
						<div className="field">
  							<label htmlFor="label">Password</label>
  							<p className="control">
    						<input className="input" type="text" ref="password"/>
  							</p>
						</div>
					</div>
				</div>
				<a onClick={this.fetchLogInSuccess}>Log In</a>
				<div>
				<Link to="SignUp">Don't have an account? Sign up here</Link>
				</div>
			</section>
		</div>
	);
  }
};

const mapStateToProps = (state, props) => ({
	appData: state
});

export default connect(mapStateToProps)(SignIn);