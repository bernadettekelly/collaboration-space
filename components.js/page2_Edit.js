import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Edit extends React.Component {
	constructor(props) {

	}
}
render(){
	return (
		<div>
		<section>
            	<div className="field">
  					<label htmlFor="label">First Name</label>
  					<p className="control">
    					<input class="input" type="text">
  					</p>
				</div>

				<div className="field">
  					<label htmlFor="label">Last Name</label>
  					<p className="control has-icons-left has-icons-right">
    					<input className="input is-success" type="text">
    						<span className="icon is-small is-left">
      							<i className="fa fa-user"></i>
    						</span>
    						<span className="icon is-small is-right">
      							<i className="fa fa-check"></i>
    						</span>
  					</p>
				</div>

				<div className="field">
  					<label htmlFor="label">Email</label>
  						<p className="control has-icons-left has-icons-right">
    						<input className="input is-danger" type="text" placeholder="Email input" value="hello@">
    							<span className="icon is-small is-left">
      								<i className="fa fa-envelope"></i>
    							</span>
    							<span className="icon is-small is-right">
      								<i className="fa fa-warning"></i>
    							</span>
  						</p>
				</div>
      
               <div className="field">
  					<label htmlFor="label">Phone Number</label>
  					<p className="control">
    					<input class="input" type="text">
  					</p>
				</div>

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

				<div className="field">
  					<label htmlFor="label">About You</label>
  						<p className="control">
    						<textarea className="textarea"</textarea>
 						</p>
				</div>
				<div>
					<Link to="Search">Save Changes</Link>
					//<button type="submit" className="EditSubmit">Save Changes</button>
				</section>
        </div>
    );
};

const mapStateToProps = (state, props) => ({
	userData: state
});

export default connect(mapStateToProps)(Edit);