import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class SignIn extends React.Component {
	constructor(props) {

	}
}
render(){
	return (
		<div>
			<section>
				<div className="SignInTitle"><Log In</div>
				<div className="field">
  					<label htmlFor="label">Username</label>
  					<p className="control">
    					<input class="input" type="text">
  					</p>
				</div>

				<div className="field">
  					<label htmlFor="label">Password</label>
  					<p className="control">
    					<input class="input" type="text">
  					</p>
				</div>
				<Link to="Search">Log In</Link>
				//<button type="submit" className="SignInSubmit">Log In</button>
			</section>
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	userData: state
});

export default connect(mapStateToProps)(SignIn);