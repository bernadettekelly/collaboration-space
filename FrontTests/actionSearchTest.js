import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Search from './components/page2_Search.js';

describe('Search component', function(){
	it('Renders the results', function() {
  	const user ='userDataExample';
		
		const renderer = TestUtils.createRenderer();
		renderer.render(<Search user={user}/>);
		const result = renderer.getRenderOutput();
  });
});