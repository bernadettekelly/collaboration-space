import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import chai from 'chai';

const should = chai.should();

import {Search} from '../components/page2_Search.js';


describe('Search component', function() {
	it('should render the Search component', function() {
		let props = {
			appData: {
				candidates: []
			}
		};
		const SearchSection = "dataExample";

		const renderer = new ReactShallowRenderer();
		renderer.render(<Search {...props}/>);
		const result = renderer.getRenderOutput();	
		result.type.should.equal('div');
	});
})
