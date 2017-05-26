import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import SignIn from '../components/page1_SignIn';

describe('SignIn component', function() {
	it('should render the SignIn component', function() {

		const renderer = TestUtils.createRenderer();
		renderer.render(<SignIn/>);
		const result = renderer.getRenderOutput();
	});
})