import React from 'react';
import {Link, hashHistory} from 'react-router';

export default function Navbar(props) {
	let links = [];
	console.log(props.onLogOut);
	if(props.isLoggedIn){
		links.push(<Link className="nav-item is-tab" to="Edit">Edit Profile</Link>);
  		links.push(<a className="nav-item is-tab" onClick={props.onLogOut}>Log Out</a>);
	}else{
		links.push(<Link className="nav-item is-tab" to="SignIn">Log In</Link>);
	}
	return (
		<nav className="nav">
			<div className="nav-right nav-menu is-active">
			{links}			
  			</div>
  		</nav>
    );
};


