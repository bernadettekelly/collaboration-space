import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

describe('LogOut action', function() {
  	it('logs out a user', function() {
		
		const renderer = TestUtils.createRenderer();
		renderer.render(<LogOut user={user}/>);
		const result = TestUtils.renderIntoDocument(
		<LogOut user={user} fetchLogOutSucess);
});
  });