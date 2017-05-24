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
					<strong>{this.props.item.firstName} {this.props.item.lastName}</strong>
					{this.props.item.category}<br/>
					{this.props.item.Location}<br/>
					{this.props.item.Email}<br/>
					<a className={this.state.expanded ? 'hidden' : ''} href="#" onClick={this.seeMore.bind(this)}>See more</a>
					<p className={this.state.expanded ? '' : 'hidden'}>{this.props.item.Phone}</p>
					<p className={this.state.expanded ? '' : 'hidden'}>{this.props.item.Bio}</p>
					
					<span className={this.state.expanded ? 'x' : 'hidden'} onClick={this.closeBox.bind(this)}>&times;</span>
				</div>
			</div>
		);
	}
};

export default Box;