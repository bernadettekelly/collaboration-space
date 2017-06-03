import chai from 'chai';

const should = chai.should();

import * as userActions from '../actions/index.js';
import {appReducer} from '../reducers/index.js';

describe('userActions', function(){
	it('should search for user data', function() {
		userActions.fetchSearch('Instrumentalist', 'Queens');
	  });
	it('should update the reducer when the search is succesful', function(){
  		const initialState = {
			userData: null,
			candidates: [],
			error: null
		};
		const nextState = appReducer(initialState, userActions.fetchSearchSuccess([{name: 'Audrey', type: 'vocalist'}]));
		nextState.should.deep.equal({userData: null, candidates: [{name: 'Audrey', type: 'vocalist'}], error: null});
  });
});