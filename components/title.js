import React from 'react';
import {connect, hashHistory} from 'react-router';

export default function Title(props) {
	var hero = "hero "+props.size;
	return (
		<div>
			<section className={hero}>
				<div className="hero-body">
					<div className="container">
						<section id = "header_container">
							<h1>Collaboration Space</h1>
							<h2>Welcome to Collaboration Space - a place for New York City musicians to make connections and work together.</h2>
						</section>
					</div>
				</div>
			</section>
		</div>
    );
};


