import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Search from './components/page2_Search.js';


describe('Search component', function() {
	it('Renders the Search component', function() {
		const SearchSection = "dataExample";

		const renderer = TestUtils.createRenderer();
		renderer.render(<Search/>);
		const result = renderer.getRenderOutput();
	});
})
