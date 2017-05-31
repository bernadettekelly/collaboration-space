import React from 'react';
import {connect} from 'react-redux';
import {Link, hashHistory} from 'react-router';
import Title from './title';
import Navbar from './navbar';
import * as userActions from '../actions/index';
import Box from './box';

export class Search extends React.Component {
	constructor(props) {
		super(props);
		/*this.state = {
			boxStyle: {
				height: 70px
			}
		};*/
        this.fetchSearch = this.fetchSearch.bind(this);
        this.fetchLogOut = this.fetchLogOut.bind(this);
	}

	fetchSearch(e) {
		e.preventDefault();
		//if(...) hashHistory
		this.props.dispatch(userActions.fetchSearch(this.refs.type.value, this.refs.location.value));
	}

	fetchLogOut(e){
		this.props.dispatch(userActions.fetchLogOut())
	}

	/*smallBox() {
		letBox = this.refs['box'];
		box.style.height = 70px;
	};*/

	/*expandBox() {
		this.setState({boxStyle:{height: 270px}{p clasName="";}});
	};*/

	componentDidUpdate() {
		console.log('update', this.props.appData.userData);
    if(this.props.appData.userData==null) hashHistory.push('/');
  }


render(){
	const {appData} = this.props;
	console.log(appData.candidates);
	return (
		<div>
			<Title size="is-medium"/>
			<section id="SearchSection">
			<Navbar isLoggedIn={appData.userData !== null} onLogOut={this.fetchLogOut} />
			
  					<form id="SearchForm" form action="#" method="post">
  					
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
                    	
                    	
						<a onClick={this.fetchSearch}>Search</a>
						
					
					</form>
  				<section id = "results_container">
					<div className="columns">
        				<div className="column is-one-third">
					{
						appData.candidates.map((item, index) => {
							return (
								<Box item={item} />
							)
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