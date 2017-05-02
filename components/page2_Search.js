import React from 'react';
import {connect} from 'react-redux';
import {Link, hashHistory} from 'react-router';
import Title from './title';
import * as userActions from '../actions/index';

class Search extends React.Component {
	constructor(props) {
		super(props);
        this.fetchSearchSuccess = this.fetchSearchSuccess.bind(this);
	}

	 componentDidUpdate(){
    	if(this.props.updatedData.userData) hashHistory.push('/Search');
    }

	fetchSearchSuccess(e) {
	e.preventDefault()
	this.props.dispatch(userActions.fetchSearchSuccess);
	}

render(){
	return (
		<div>
			<Title/>
			<section id="SearchSection">
				<div className="nav-right nav-menu">
  					<Link to="Edit">Edit Profile</Link>
  					<a onClick={this.fetchLogOutSuccess}>Log Out</a>
  				</div>
  				
  			
			<form id="SearchForm" form action="#" method="post">
				<section className="Category_Dropdown">
					<label htmlFor="Category-Dropdown">Type</label>
					<select>
						<option value="Instrumentalist">Instrumentalist</option>
						<option value="Vocalist">Vocalist</option>
						<option vlaue="Composer">Composer</option>
					</select>
				</section>
				<section className="Location_Dropdown">
                    <label htmlFor="Location">Location</label>
						<select>
							<option value="Manhattan">Manhattan</option>
							<option value="Queens">Queens</option>
                            <option value="Brooklyn">Brooklyn</option>
                            <option value="Bronx">Bronx</option>
                            <option value="Staten Island">Staten Island</option>
                        </select>
                </section>
				<a onClick={this.fetchSearchSuccess}>Search</a>
			</form>
			<section id = "results_container">
				<div className="box">
					<article className="media">
						<div className="media-left">
						</div>
						<div className="media-content">
							<div className="content">
										
							</div>
						</div>
					</article>
				</div>
			</section>
			</section>
		</div>
	);
  }
};

const mapStateToProps = (state, props) => ({
	updatedData: state
});

export default connect(mapStateToProps)(Search);