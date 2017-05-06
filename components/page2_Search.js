import React from 'react';
import {connect} from 'react-redux';
import {Link, hashHistory} from 'react-router';
import Title from './title';
import * as userActions from '../actions/index';

class Search extends React.Component {
	constructor(props) {
		super(props);
        this.fetchSearch = this.fetchSearch.bind(this);
        this.fetchLogOut = this.fetchLogOut.bind(this);
	}

	fetchSearch(e) {
		e.preventDefault()
		this.props.dispatch(userActions.fetchSearch(this.refs.type.value, this.refs.location.value));
	}

	fetchLogOut(e){
		this.props.dispatch(userActions.fetchLogOut())
	}

	componentDidUpdate() {
    if(this.props.appData.userData==null) hashHistory.push('/');
  }

render(){
	const {appData} = this.props;
	console.log(appData.candidates);
	return (
		<div>
			<Title/>
			<section id="SearchSection">
				<div className="nav-right nav-menu">
  					<Link className="nav-item is-tab" to="Edit">Edit Profile</Link>
  					<a className="nav-item is-tab" onClick={this.fetchLogOut}>Log Out</a>
  				</div>
  				<form id="SearchForm" form action="#" method="post">
					<section className="Category_Dropdown">
						<label htmlFor="Category-Dropdown">Type</label>
						<select ref="type">
							<option value="Instrumentalist">Instrumentalist</option>
							<option value="Vocalist">Vocalist</option>
							<option value="Composer">Composer</option>
						</select>
					</section>
					<section className="Location_Dropdown">
                    	<label htmlFor="Location">Location</label>
						<select ref="location">
							<option value="Manhattan">Manhattan</option>
							<option value="Queens">Queens</option>
                            <option value="Brooklyn">Brooklyn</option>
                            <option value="Bronx">Bronx</option>
                            <option value="Staten Island">Staten Island</option>
                        </select>
                	</section>
					<a onClick={this.fetchSearch}>Search</a>
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

export default connect(mapStateToProps)(Search);