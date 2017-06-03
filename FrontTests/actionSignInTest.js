import chai from 'chai';

const should = chai.should();

import * as userActions from '../actions/index.js';
import {appReducer} from '../reducers/index.js';

describe('User Actions', function() {
  	it('should log in a user', function() {
		userActions.fetchLogIn('audrey1', 'cat')
	});
		it('should update the reducer when the signin is succesful', function(){
  		const initialState = {
			userData: null,
			candidates: [],
			error: null
		};
	const nextState = appReducer(initialState, userActions.fetchSignIn({username: 'audrey1'}));
	nextState.should.deep.equal({userData: {username: 'audrey1'}, candidates: [], error: null});
});