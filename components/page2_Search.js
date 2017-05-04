import React from 'react';
import {connect} from 'react-redux';
import {Link, hashHistory} from 'react-router';
import Title from './title';
import * as userActions from '../actions/index';

class Search extends React.Component {
	constructor(props) {
		super(props);
        this.fetchSearchSuccess = this.fetchSearchSuccess.bind(this);
        //this.fetchLogOutSuccess = this.fetchLogOutSuccess.bind(this);
	}

	 componentDidUpdate(){
    	if(this.props.searchData.userData) hashHistory.push('/Search');
    	//if(this.props.logOutData.userData) hashHistory.push('/');
    }

	fetchSearchSuccess(e) {

	e.preventDefault()
	console.log("xyz");
	this.props.dispatch(userActions.fetchSearchSuccess(this.refs.instrumentalist.value, this.refs.vocalist.value, this.refs.composer.value, this.refs.manhattan.value, this.refs.queens.value, this.refs.brooklyn.value, this.refs.bronx.value, this.refs.staten_island.value ));
	//this.props.dispatch(userActions.fetchLogOutSuccess());
	}

render(){
	return (
		<div>
			<Title/>
			<section id="SearchSection">
				<div className="nav-right nav-menu">
  					<a className="nav-item is-tab"><Link to="Edit">Edit Profile</Link></a>
  					<a className="nav-item is-tab"><a onClick={this.fetchLogOutSuccess}>Log Out</a></a>
  				</div>
  				<form id="SearchForm" form action="#" method="post">
					<section className="Category_Dropdown">
						<label htmlFor="Category-Dropdown">Type</label>
						<select>
							<option value="Instrumentalist" ref = "instrumentalist">Instrumentalist</option>
							<option value="Vocalist" ref = "vocalist">Vocalist</option>
							<option value="Composer" ref = "composer">Composer</option>
						</select>
					</section>
					<section className="Location_Dropdown">
                    	<label htmlFor="Location">Location</label>
						<select>
							<option value="Manhattan" ref = "manhattan">Manhattan</option>
							<option value="Queens" ref = "queens">Queens</option>
                            <option value="Brooklyn" ref = "brooklyn">Brooklyn</option>
                            <option value="Bronx" ref = "bronx">Bronx</option>
                            <option value="Staten Island" ref = "staten_island">Staten Island</option>
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
	searchData: state,
	logOutData: state
});

export default connect(mapStateToProps)(Search);