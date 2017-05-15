import React from 'react';
import {connect} from 'react-redux';
import {Link, hashHistory} from 'react-router';
import Title from './title';
import * as userActions from '../actions/index';

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
        this.fetchSearch = this.fetchSearch.bind(this);
        //this.fetchLogInSuccess = this.fetchLogInSuccess.bind(this);
	}

	 componentWillReceiveProps(nextProps){
    	console.log("::UPDATED::", this.props.appData.userData);
    	//if(nextProps.appData.userData !== null) hashHistory.push('/Search');
    }

	fetchSearch(e) {
		e.preventDefault();
		if(this.props.appData.userData==null) hashHistory.push('/SignIn');
		this.props.dispatch(userActions.fetchSearch(this.refs.type.value, this.refs.location.value));
	}

render(){
	const {appData} = this.props;
	console.log(appData.candidates);
	return (
		<div>
			<Title/>
			<section id="SearchSection">
			<nav className="nav">
				<div className="nav-right nav-menu is-active">
  					<Link className="nav-item is-tab" to="SignIn">Log In</Link>
  				</div>
  			</nav>
  					<form id="LandingForm" form action="#" method="post">
  					<div className="columns is-multiline is-mobile">
              			<div className="column is-one-third">
							<section className="Category_Dropdown">
								<label htmlFor="Category-Dropdown">Type</label>
								<div className="field">
  								<p className="control">
    							<span className="select is-medium">
								<select ref="type">
									<option value="Instrumentalist">Instrumentalist</option>
									<option value="Vocalist">Vocalist</option>
									<option value="Composer">Composer</option>
								</select>
								</span>
								</p>
								</div>
							</section>
						</div>
						<div className="column is-one-third">
							<section className="Location_Dropdown">
                    			<label htmlFor="Location">Location</label>
                    			<div className="field">
  								<p className="control">
    							<span className="select is-medium">
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
                	    	</section>
                    	</div>
                    	<div className="column">
						<a onClick={this.fetchSearch}>Search</a>
						//{this.fetchLogInSuccess}
						</div>
					</div>
					</form>
  				<section id = "results_container">
					<div className="columns">
        				<div className="column is-one-third">
					{
						appData.candidates.map((item, index) => {
							return (
								<div className="box" key="">
									<div className="media-left"> <strong> {item.firstName} {item.lastName} </strong> {item.category} <br/> {item.Location} <br/> {item.Email} <br/> {item.Phone} <br/> {item.Bio}</div>
								</div>
							);
						})
					}
					
						<article className="media">
							<div className="media-left"></div>
							<div className="media-content">
								<div className="content"></div>
							</div>
						</article>
					
						</div>
					</div>
				</section>
         		
			</section>
		</div>
	);
  }
};

const mapStateToProps = (state, props) => ({
	appData: state
});

export default connect(mapStateToProps)(LandingPage);