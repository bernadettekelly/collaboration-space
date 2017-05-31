import React from 'react';
import $ from 'teaspoon';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import chai from 'chai';

const should = chai.should();
import {Edit} from '../components/page2_Edit';

describe('Edit component', function() {
	it('should render the Edit component', function() {
		const container = "dataExample";

		const renderer = new ReactShallowRenderer();
		renderer.render(<Edit/>);
		const result = renderer.getRenderOutput();
		result.type.should.equal('div');
	});
})