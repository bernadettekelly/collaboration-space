import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import chai from 'chai';

const should = chai.should();

  import {SignUp} from '../components/page1_SignUp.js';


describe('SignUp component', function() {
	it('should render the SignUp component', function() {
		const container = "dataExample";

		const renderer = new ReactShallowRenderer();
		renderer.render(<SignUp/>);
		const result = renderer.getRenderOutput();
		result.type.should.equal('div');
	});
})