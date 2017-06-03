import chai from 'chai';

const should = chai.should();

import * as userActions from '../actions/index.js';
import {appReducer} from '../reducers/index.js';

describe('userActions', function() {
  	it('should log out a user', function() {
		userActions.fetchLogOut();
	});
	it('should update the reducer when the logout is succesful', function(){
  		const initialState = {
			userData: null,
			candidates: [],
			error: null
		};
		const nextState = appReducer(initialState, userActions.fetchLogOut());
		nextState.should.deep.equal({userData: null, candidates: [], error: null});
	});
 });