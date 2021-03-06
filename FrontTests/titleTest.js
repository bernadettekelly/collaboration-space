import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Title from '../components/title';

describe('Title component', function() {
	it('Should render the title', function() {
		const header_container = "titleExample";

		const renderer = TestUtils.createRenderer();
		renderer.render(<Title/>);
		const result = renderer.getRenderOutput();
	});
})