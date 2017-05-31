import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import chai from 'chai'
const should = chai.should();

import {SignIn} from '../components/page1_SignIn';

describe('SignIn component', function() {
	it('should render the SignIn component', function() {
		const renderer = new ReactShallowRenderer();
		renderer.render(<SignIn />);
		const result = renderer.getRenderOutput();
		result.type.should.equal('div');
	});
})
