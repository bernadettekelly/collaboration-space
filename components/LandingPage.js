import React from 'react';
import {connect} from 'react-redux';
import {Link, hashHistory} from 'react-router';
import Title from './title';
import Navbar from './navbar';
import * as userActions from '../actions/index';

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalStyle: {
				display: 'block'
			}
		};
        this.fetchSearch = this.fetchSearch.bind(this);
        this.fetchLogOut = this.fetchLogOut.bind(this);
	}

	fetchLogOut(e){
		this.props.dispatch(userActions.fetchLogOut())
	}

	fetchSearch(e) {
		e.preventDefault();
		if(this.props.appData.userData==null) hashHistory.push('/SignIn');
		this.props.dispatch(userActions.fetchSearch(this.refs.type.value, this.refs.location.value));
	}

	openModal() {
		let modal = this.refs['modal'];
     	modal.style.display = "block";
	};

	closeModal() {
		this.setState({modalStyle: {display: 'none'}});
	};


render(){
	const {appData} = this.props;
	console.log(appData.candidates);
	return (
		<div>
			<Title size="is-fullheight"/>
			<section id="SearchSection">
					<Navbar isLoggedIn={appData.userData !== null} onLogOut={this.fetchLogOut} />
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
						</div>
					</div>
							
			</form>
			<div id="myModal" className="modal" style={this.state.modalStyle}>
  				<div className="modal-content">
    			<span className="close" onClick={this.closeModal.bind(this)}>&times;</span>
    			<p>Welcome! To log in, you may use our created login - 
    			username: audrey1, password: cat. Feell free to edit 
    			Audrey's profile if you like and search for other musicians
    			on our search page. Thanks for visiting!</p>
  				</div>

			</div>
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