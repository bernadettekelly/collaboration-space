import React from 'react';
import {connect} from 'react-redux';
import {Link, hashHistory} from 'react-router';

class Box extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false
		}
	}
	seeMore(event){
		event.preventDefault();
		this.setState({expanded: true});
	}
	closeBox(event){
		event.preventDefault();
		this.setState({expanded: false});
	}
	render() {
		return (
			<div className="box"key=""> 
				<div className="media-left">
					<div className="nameDiv">
						<strong>{this.props.item.firstName} {this.props.item.lastName}</strong>
					</div>
					<div className="locationDiv">
						{this.props.item.Location}
					</div>
					<div className="emailDiv">
						{this.props.item.Email}
					</div>
					<div className="seeDiv">
						<a className={this.state.expanded ? 'hidden' : ''} href="#" onClick={this.seeMore.bind(this)}>See more</a>
					</div>
					<p className={this.state.expanded ? '' : 'hidden'}>{this.props.item.Phone}</p>
					<p className={this.state.expanded ? '' : 'hidden'}>{this.props.item.Bio}</p>
					
					<span className={this.state.expanded ? 'x' : 'hidden'} onClick={this.closeBox.bind(this)}>&times;</span>
				</div>
			</div>
		);
	}
};

export default Box;