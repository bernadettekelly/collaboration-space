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

    componentDidUpdate(){
    	if(this.props.updatedData.userData) hashHistory.push('/Search');
    }

    fetchLogInSuccess(e) {
    	e.preventDefault();
    	console.log('Click on login');
    	this.props.dispatch(userActions.fetchLogIn);
    }

render(){
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
    						<input className="input" type="text"/>
  							</p>
						</div>
					</div>
				</div>

           		<div className="columns">
          			<div className="column is-one-quarter">
						<div className="field">
  							<label htmlFor="label">Password</label>
  							<p className="control">
    						<input className="input" type="text"/>
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
	updatedData: state
});

export default connect(mapStateToProps)(SignIn);