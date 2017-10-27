import React from 'react';
import {connect} from 'react-redux';
import {Link, hashHistory} from 'react-router';
import * as userActions from '../actions/index';

export class Edit extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      Category: null,
      Location: null,
      Email: null,
      Phone: null,
      Bio: null
    }
    this.fetchEdit = this.fetchSearchEdit.bind(this);
    this.fetchLogOut = this.fetchLogOut.bind(this);
	}

  componentDidMount(){
    this.props.dispatch(userActions.fetchUserData());
  }

  componentWillReceiveProps(nextProps){
    const {appData} = nextProps; 
    if(appData.userData!==null) {
    this.setState({
      firstName: appData.userData.firstName, 
      lastName: appData.userData.lastName,
      Category: appData.userData.Category,
      Location: appData.userData.Location,
      Email: appData.userData.Email,
      Phone: appData.userData.Phone,
      Bio: appData.userData.Bio
    });
  }
}

   componentDidUpdate(){
      if(this.props.appData.userData) hashHistory.push('/Search');
    }

 
  fetchLogOut(e){
    this.props.dispatch(userActions.fetchLogOut())
  }

  componentDidUpdate() {
    console.log('update', this.props.appData.userData);
    if(this.props.appData.userData==null) hashHistory.push('/');
  }

  fetchSearchEdit(e) {
  e.preventDefault()  
  this.props.dispatch(userActions.fetchEdit(this.refs.first_name.value, this.refs.last_name.value, this.refs.category.value, this.refs.location.value, this.refs.email.value, this.refs.phone.value, this.refs.bio.value));
  }

changeValue(propName, e){
  let newState = {};
  newState[propName] = e.currentTarget.value
  this.setState(newState);
}

render(){
  const {appData} = this.props; 

	return (
		<div className="editDiv">
      <div className="container">
		    <section id="EditSection">
          
            <Link className="return" to="Search">Return to search</Link>
            <a className="out" onClick={this.fetchLogOut}>Log Out</a>
         
        <div className="columns is-gapless is-multiline is-mobile">
              <div className="column is-three-quarters">
              <div className="EditTitle">Edit</div>
            	 <div className="field">
  					     <label htmlFor="label">First Name</label>
  					     <p className="control">
    					   <input className="input is-primary" type="text" ref="first_name" value={this.state.firstName} onChange={this.changeValue.bind(this, 'firstName')}/>
  					     </p>
				      </div>
             </div>
             <div className="column is-three-quarters">
              <div className="fun_drums"><img src="/assets/drums.png"/></div>
            </div>
        </div>
        
        <div className="columns">
             <div className="column is-three-quarters">
				        <div className="field">
  					     <label htmlFor="label">Last Name</label>
  					     <p className="control has-icons-left has-icons-right">
    					   <input className="input is-primary" type="text" ref = "last_name" value={this.state.lastName} onChange={this.changeValue.bind(this, 'firstName')}/>
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

        <div className="columns is-gapless is-multiline is-mobile">
          <div className="column is-three-quarters">
				    <div className="field">
  					 <label htmlFor="label">Email</label>
  						<p className="control has-icons-left has-icons-right">
    						<input className="input is-primary" type="text" ref = "email" value={this.state.Email} onChange={this.changeValue.bind(this, 'Email')}/>
    							<span className="icon is-small is-left">
      								<i className="fa fa-envelope"></i>
    							</span>
    							<span className="icon is-small is-right">
      								<i className="fa fa-warning"></i>
    							</span>
  						</p>
				    </div>
          </div>
              <div className="column is-three-quarters">
              <div className="fun_note"><img src="/assets/note.gif"/></div>
              </div>
        </div>

        <div className="columns">
          <div className="column is-three-quarters">
            <div className="field">
  					 <label htmlFor="label">Phone Number</label>
  					 <p className="control">
    					<input className="input is-primary" type="text" ref = "phone" value={this.state.Phone} onChange={this.changeValue.bind(this, 'Phone')}/>
  					 </p>
				    </div>
          </div>
        </div>

        <div className="columns">
          <div className="column is-three-quarters">
				    <div className="field">
  					 <label htmlFor="label">Location</label>
  						<p className="control">
    						<span className="select">
      							<select ref="location" value={this.state.Location} onChange={this.changeValue.bind(this, 'Location')}>
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
         <div className="column is-three-quarters">
         <div className="fun_earphones"><img src="/assets/earphones.png"/></div>
         </div>
       </div>

      <div className="columns is-gapless is-multiline is-mobile">
        <div className="column is-three-quarters">
				  <div className="field">
  					<label htmlFor="label">Type</label>
  						<p className="control">
    						<span className="select">
      							<select ref="category" value={this.state.Category} onChange={this.changeValue.bind(this, 'Category')}>
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
    						<textarea className="textarea is-primary" ref="bio" value={this.state.Bio} onChange={this.changeValue.bind(this, 'Bio')}></textarea>
 						</p>
				 </div>
       </div>
      </div>
				<div>
          <a onClick={this.fetchEdit}>Save Changes</a>
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