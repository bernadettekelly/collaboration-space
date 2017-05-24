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

    componentWillReceiveProps(nextProps){
    	console.log("::UPDATED::", this.props.appData.userData);
    	if(nextProps.appData.userData !== null) hashHistory.push('/Search');
    }

    fetchLogInSuccess(e) {
    	e.preventDefault();
    	console.log('Click on login');
    	this.props.dispatch(userActions.fetchLogIn(this.refs.username.value, this.refs.password.value));
    }

render(){
	const {appData} = this.props; 
	return (
		<div>
			<Title size="is-medium"/>
			<section id="SignInSection">
				<div className="columns is-gapless is-multiline is-mobile">
              		<div className="column is-one-quarter">
						<div className="SignInTitle">Log In</div>
							<div className="field">
  							<label htmlFor="label">Username</label>
  							<p className="control">
    						<input className="input" type="text" ref="username"/>
  							</p>
							</div>
						
					</div>
						<div className="column is-three-quarters">
							<div className="fun_music"><img src="/assets/music.png"/></div>
						</div>
				</div>
           		<div className="columns is-gapless is-multiline is-mobile">
          			<div className="column is-one-quarter">
						<div className="field">
  							<label htmlFor="label">Password</label>
  							<p className="control">
    						<input className="input" type="text" ref="password"/>
  							</p>
						</div>
					</div>
					<div className="column is-three-quarters">
						<div className="fun_mic"><img src="/assets/mic.png"/></div>
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