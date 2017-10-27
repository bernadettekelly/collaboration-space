import React from 'react';
import {connect} from 'react-redux';
import {Link, hashHistory} from 'react-router';
import * as userActions from '../actions/index';


export class SignUp extends React.Component {
	constructor(props) {
    super(props);
    this.fetchSignUpSuccess = this.fetchSignUpSuccess.bind(this);

	}

  componentDidUpdate() {
    if(this.props.appData.userData) hashHistory.push('/Search');
  }
  fetchSignUpSuccess(e) {
  e.preventDefault()
  this.props.dispatch(userActions.fetchSignUp(this.refs.first_name.value, this.refs.last_name.value, this.refs.username.value, this.refs.password.value, this.refs.email.value, this.refs.category.value, this.refs.location.value, this.refs.phone.value, this.refs.bio.value));
  }

render(){
  const {appData} = this.props; 
	return (
		<div>
        <div className="container">
        <section>
            <div className="columns is-gapless is-multiline is-mobile">
              <div className="column is-three-quarters">
                  <div className="SignUpTitle">Sign Up</div>
            	       <div className="field">
  					         <label htmlFor="label">First Name</label>
  					         <p className="control">
    					       <input className="input is-primary" type="text" ref = "first_name"/>
  					         </p>
                     </div>
              </div>
                <div className="column is-three-quarters">
                  <div className="fun"><img src="/assets/imgres.png"/></div>
                </div>
            </div>
             <div className="columns is-gapless is-multiline is-mobile">
                 <div className="column is-three-quarters">
                  <div className="field">
  					      <label htmlFor="label">Last Name</label>
  					      <p className="control has-icons-left has-icons-right">
    					    <input className="input is-primary" type="text" ref = "last_name"/>
    						  <span className="icon is-small is-left">
      							<i className="fa fa-user"></i>
    						  </span>
    						  <span className="icon is-small is-right">
      							<i className="fa fa-check"></i>
    						  </span>
  					     </p>
				         </div>
               </div>
               <div className="column is-three-quarters">
                <div className="fun_darth"><img src="/assets/darth.png"/></div>
               </div>
            </div>
            <div className="columns">
                <div className="column is-one-quarter">
                  <div className="field">
  					     <label htmlFor="label">Username</label>
  					     <p className="control">
    					   <input className="input is-primary" type="text" ref = "username"/>
  					     </p>
				        </div>
              </div>
            </div>

            <div className="columns">
              <div className="column is-one-quarter">
                <div className="field">
  					     <label htmlFor="label">Password</label>
  					     <p className="control">
    					   <input className="input is-primary" type="text" ref = "password"/>
  					     </p>
				      </div>
             </div>
            </div>

            <div className="columns">
              <div className="column is-one-quarter">
                <div className="field">
  					     <label htmlFor="label">Email</label>
  						    <p className="control has-icons-left has-icons-right">
    						  <input className="input is-primary" type="text" ref = "email"/>
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

            <div className="columns is-gapless is-multiline is-mobile">
              <div className="column is-three-quarters">
                <div className="field">
  					       <label htmlFor="label">Phone Number</label>
  					       <p className="control">
    					     <input className="input is-primary" type="text" ref = "phone"/>
  					       </p>
				        </div>
             </div>
             <div className="column is-three-quarters">
              <div className="fun_band"><img src="/assets/band.gif"/></div>
             </div>
            </div>

            <div className="columns">
              <div className="column is-one-quarter">
                <div className="field">
  					     <label htmlFor="label">Location</label>
  						    <p className="control">
    						  <span className="select">
      							<select ref="location">
        							<option value="Manhattan">Manhattan</option>
                      <option value="Queens">Queens</option>
                      <option value="Brooklyn">Brooklyn</option>
                      <option value="Bronx">Bronx</option>
                      <option value="Staten Island">Staten Island</option>
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
      							<select ref="category">
        							<option value="Instrumentalist">Instrumentalist</option>
                      <option value="Vocalist">Vocalist</option>
                      <option value="Composer">Composer</option>
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
    						<textarea className="textarea is-primary" ref = "bio"></textarea>
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
	appData: state
});

export default connect(mapStateToProps)(SignUp);