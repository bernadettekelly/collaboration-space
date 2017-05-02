import React from 'react';
import {connect} from 'react-redux';
import {Link, hashHistory} from 'react-router';
import * as userActions from '../actions/index';

class Edit extends React.Component {
	constructor(props) {
    super(props);
    this.fetchEditSuccess = this.fetchEditSuccess.bind(this);

	}

   componentDidUpdate(){
      if(this.props.updatedData.userData) hashHistory.push('/Search');
    }

  fetchEditSuccess(e) {
  e.preventDefault()  
  this.props.dispatch(userActions.fetchEditSuccess);
  }

render(){
	return (
		<div>
    <div className="container">
		  <section id="EditSection">
        <div className="columns">
              <div className="column is-one-quarter">
              <div className="EditTitle">Edit</div>
            	 <div className="field">
  					     <label htmlFor="label">First Name</label>
  					     <p className="control">
    					   <input className="input" type="text"/>
  					     </p>
				      </div>
             </div>
        </div>

        <div className="columns">
             <div className="column is-one-quarter">
				        <div className="field">
  					     <label htmlFor="label">Last Name</label>
  					     <p className="control has-icons-left has-icons-right">
    					   <input className="input is-success" type="text"/>
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
    						<input className="input is-danger" type="text"/>
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
    					<input className="input" type="text"/>
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
        							<option>Manhattan</option>
        							<option>Queens</option>
        							<option>Brooklyn</option>
        							<option>Bronx</option>
        							<option>Staten Island</option>
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
        							<option>Instrumentalist</option>
        							<option>Vocalist</option>
        							<option>Composer</option>
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
    						<textarea className="textarea"></textarea>
 						</p>
				 </div>
       </div>
      </div>
				<div>
					<Link to="Search">Save Changes</Link>
          <a onClick={this.fetchEditSuccess}>Save Changes</a>
        </div>
		</section>
    </div>
  </div>

    );
  }
};

const mapStateToProps = (state, props) => ({
	updatedData: state
});

export default connect(mapStateToProps)(Edit);