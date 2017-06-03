import chai from 'chai';

const should = chai.should();

import * as userActions from '../actions/index.js';
import {appReducer} from '../reducers/index.js';

describe('userActions', function() {
	it('should edit the user data', function() {
		userActions.fetchEdit('Audrey', 'Smith', 'vocalist','audrey@gmail.com', 'Manhattan', '111-111-1111', 'abc')
	});
	it('should update the reducer when the edit is succesful', function(){
  		const initialState = {
			userData: null,
			candidates: [],
			error: null
		};
	const nextState = appReducer(initialState, userActions.fetchEditSuccess({username: 'audrey1'}));
	nextState.should.deep.equal({userData: {username: 'audrey1'}, candidates: [], error: null});
	});
});