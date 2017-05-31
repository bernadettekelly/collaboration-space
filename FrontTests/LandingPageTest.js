import {should} from 'chai';
import React from 'react';
import {LandingPage} from '../components/LandingPage';

import ReactShallowRenderer from 'react-test-renderer/shallow';

describe('LandingPage component', function() {
	it('should render the LandingPage component', function() {
		let props = {
			appData: {
				candidates: []
			}
		};
		const renderer = new ReactShallowRenderer();
		renderer.render(<LandingPage {...props}/>);
		const result = renderer.getRenderOutput();
		result.type.should.equal('div');
	});
})
