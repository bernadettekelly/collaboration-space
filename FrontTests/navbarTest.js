import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {should} from 'chai';

import Navbar from '../components/Navbar';

describe('Navbar component', function() {
	it('Should render the nav component', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<Navbar/>);
		const result = renderer.getRenderOutput();
	});
})
