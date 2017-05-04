import React from 'react';
import {connect} from 'react-redux';
import {Link, hashHistory} from 'react-router';
import * as userActions from '../actions/index';


class SignUp extends React.Component {
	constructor(props) {
    super(props);
    this.fetchSignUpSuccess = this.fetchSignUpSuccess.bind(this);

	}

  componentDidUpdate() {
    if(this.props.SignUpData.userData) hashHistory.push('/Search');
  }
  fetchSignUpSuccess(e) {
  e.preventDefault()
  this.props.dispatch(userActions.fetchSignUpSuccess(this.refs.first_name.value, this.refs.last_name.value, this.refs.email.value, this.refs.phone.value, this.refs.instrumentalist.value, this.refs.vocalist.value, this.refs.composer.value, this.refs.manhattan.value, this.refs.queens.value, this.refs.brooklyn.value, this.refs.bronx.value, this.refs.staten_island.value, this.refs.about.value, this.refs.username.value, this.refs.password.value));
  }

render(){
	return (
		<div>
        <div className="container">
        <section>
            <div className="columns">
              <div className="column is-one-quarter">
                  <div className="SignUpTitle">Sign Up</div>
            	       <div className="field">
  					         <label htmlFor="label">First Name</label>
  					         <p className="control">
    					       <input className="input" type="text" ref = "first_name"/>
  					         </p>
                     </div>
              </div>
            </div>

             <div className="columns">
                 <div className="column is-one-quarter">
                  <div className="field">
  					      <label htmlFor="label">Last Name</label>
  					      <p className="control has-icons-left has-icons-right">
    					    <input className="input is-success" type="text" ref = "last_name"/>
    						  <span className="icon is-small is-left">
      							<i className="fa fa-user"></i>
    						  </span>
    						  <span className="icon is-small is-right">
      							<i className="fa fa-check"></i>
    						  </span>
  					     </p>
				         </div>
               </div>
            </div>

            <div className="columns">
                <div className="column is-one-quarter">
                  <div className="field">
  					     <label htmlFor="label">Username</label>
  					     <p className="control">
    					   <input className="input" type="text" ref = "username"/>
  					     </p>
				        </div>
              </div>
            </div>

            <div className="columns">
              <div className="column is-one-quarter">
                <div className="field">
  					     <label htmlFor="label">Password</label>
  					     <p className="control">
    					   <input className="input" type="text" ref = "password"/>
  					     </p>
				      </div>
             </div>
            </div>

            <div className="columns">
              <div className="column is-one-quarter">
                <div className="field">
  					     <label htmlFor="label">Email</label>
  						    <p className="control has-icons-left has-icons-right">
    						  <input className="input is-danger" type="text" ref = "email"/>
    							 <span className="icon is-small is-left">
      								<i className="fa fa-envelope"></i>
    							 </span>
    							 <span className="icon is-small is-right">
      								<i className="fa fa-warning"></i>
    							 </span>
  						      </p>
				          </div>
                </div>
            </div>

            <div className="columns">
              <div className="column is-one-quarter">
                <div className="field">
  					       <label htmlFor="label">Phone Number</label>
  					       <p className="control">
    					     <input className="input" type="text" ref = "phone"/>
  					       </p>
				        </div>
             </div>
            </div>

            <div className="columns">
              <div className="column is-one-quarter">
                <div className="field">
  					     <label htmlFor="label">Location</label>
  						    <p className="control">
    						  <span className="select">
      							<select>
        							<option value="Manhattan" ref = "manhattan">Manhattan</option>
                      <option value="Queens" ref = "queens">Queens</option>
                      <option value="Brooklyn" ref = "brooklyn">Brooklyn</option>
                      <option value="Bronx" ref = "bronx">Bronx</option>
                      <option value="Staten Island" ref = "staten_island">Staten Island</option>
      							</select>
    						  </span>
  						    </p>
				        </div>
              </div>
            </div>

         <div className="columns">
          <div className="column is-one-quarter">
            <div className="field">
  					<label htmlFor="label">Type</label>
  						<p className="control">
    						<span className="select">
      							<select>
        							<option value="Instrumentalist" ref = "instrumentalist">Instrumentalist</option>
                      <option value="Vocalist" ref = "vocalist">Vocalist</option>
                      <option value="Composer" ref = "composer">Composer</option>
      							</select>
    						</span>
  						</p>
				    </div>
          </div>
        </div>

      <div className="columns">
        <div className="column is-one-third">
          <div className="field">
  					<label htmlFor="label">About You</label>
  						<p className="control">
    						<textarea className="textarea" ref = "about"></textarea>
 						</p>
				  </div>
         </div>
        </div>

      <div className="columns">
        <div className="column">
           <div>
             <a onClick={this.fetchSignUpSuccess}>Sign Up</a>
            </div>
        </div>
      </div>
		 </section>
     </div>
  </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
	SignUpData: state
});

export default connect(mapStateToProps)(SignUp);