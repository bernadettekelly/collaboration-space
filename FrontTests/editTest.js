import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();
import Edit from './components/page2_Edit';

describe('Edit component', function() {
	it('Renders the Edit component', function() {
		const container = "dataExample";

		const renderer = TestUtils.createRenderer();
		renderer.render(<Edit/>);
		const result = renderer.getRenderOutput();
	});
})