import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

  import SignUp from './components/page1_SignUp.js';


describe('SignUp component', function() {
	it('Renders the SignUp component', function() {
		const container = "dataExample";

		const renderer = TestUtils.createRenderer();
		renderer.render(<SignUp/>);
		const result = renderer.getRenderOutput();
	});
})