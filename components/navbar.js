import React from 'react';
import {Link, hashHistory} from 'react-router';

export default function Navbar(props) {
	let links = [];
	if(props.isLoggedIn){
		links.push(<Link key="a" className="nav-item is-tab" to="Edit">Edit Profile</Link>);
  	links.push(<a key="b" className="nav-item is-tab" onClick={props.onLogOut}>Log Out</a>);
	}else{
		links.push(<Link key="a" className="nav-item is-tab" to="SignIn">Log In</Link>);
	}
	return (
		<nav className="nav">
			<div className="nav-right nav-menu is-active">
			{links}			
  			</div>
  		</nav>
    );
};


