import React from 'react';
import {connect} from 'react-redux';
import {Link, hashHistory} from 'react-router';
import * as userActions from '../actions/index';

class Edit extends React.Component {
	constructor(props) {
    super(props);
    this.fetchEditSuccess = this.fetchEditSuccess.bind(this);

	}

  componentDidMount(){
    this.props.dispatch(userActions.fetchUserData());
  }

  // componentDidUpdate(){
  //    if(this.props.appData.userData) hashHistory.push('/Search');
  //  }

  fetchEditSuccess(e) {
  e.preventDefault()  
  this.props.dispatch(userActions.fetchEditSuccess(this.refs.first_name.value, this.refs.last_name.value, this.refs.email.value, this.refs.phone.value, this.refs.type.value, this.refs.location.value, this.refs.about.value));
  }

render(){
  const {appData} = this.props; 
	return (
		<div>
    <div className="container">
		  <section id="EditSection">
      <div className="nav-right nav-menu">
            <Link className="nav-item is-tab" to="Search">Return to search</Link>
      </div>
        <div className="columns">
              <div className="column is-one-quarter">
              <div className="EditTitle">Edit</div>
            	 <div className="field">
  					     <label htmlFor="label">First Name</label>
  					     <p className="control">
    					   <input className="input is-primary" type="text" ref = "first_name" value={this.props.appData.userData.firstName}/>
  					     </p>
				      </div>
             </div>
        </div>

        <div className="columns">
             <div className="column is-one-quarter">
				        <div className="field">
  					     <label htmlFor="label">Last Name</label>
  					     <p className="control has-icons-left has-icons-right">
    					   <input className="input is-primary" type="text" ref = "last_name" value={this.props.appData.userData.lastName}/>
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
  					 <label htmlFor="label">Email</label>
  						<p className="control has-icons-left has-icons-right">
    						<input className="input is-primary" type="text" ref = "email" value={this.props.appData.userData.email}/>
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
    					<input className="input is-primary" type="text" ref = "phone" value={this.props.appData.userData.phone}/>
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
      							<select ref="location" value={this.props.appData.userData.location}>
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
      							<select ref="type" value={this.props.appData.userData.type}>
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
    						<textarea className="textarea is-primary" ref="about" value={this.props.appData.userData.text}></textarea>
 						</p>
				 </div>
       </div>
      </div>
				<div>
          <a onClick={this.fetchEditSuccess}>Save Changes</a>
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

export default connect(mapStateToProps)(Edit);