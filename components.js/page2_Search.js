import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Search extends React.Component {
	constructor(props) {

	}
}
render(){
	return (
		<div>
			<nav className="nav has-shadow">
  				<div class="container">
  					<div class="nav-right nav-menu">
  						<Link to="Edit">Edit Profile</Link>
  						<a className="nav-item is-tab">Log out</a>
  					</div>
  				</div>
  			</nav>
			<form id="SearchForm" form action="#" method="post">
				<section className="Category_Dropdown">
					<label htmlFor="Category-Dropdown">Type</label>
					<select multiple>
						<option value="Instrumentalist">Instrumentalist</option>
						<option value="Vocalist">Vocalist</option>
						<option vlaue="Composer">Composer</option>
					</select
				</section>
				<section className="Location_Dropdown">
                    <label htmlFor="Location">Location</label>
						<select multiple>
							<option value="Manhattan">Manhattan</option>
							<option value="Queens">Queens</option>
                            <option value="Brooklyn">Brooklyn</option>
                            <option value="Bronx">Bronx</option>
                            <option value="Staten Island">Staten Island</option>
                        </select>
                </section>
				<button type="submit" className="Search">Search</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	userData: state
});

export default connect(mapStateToProps)(Search);