import chai from 'chai';

const should = chai.should();

import * as userActions from '../actions/index.js';
import {appReducer} from '../reducers/index.js';

  describe('userActions', function() {
  	it('should sign up a new user', function() {
		userActions.fetchSignUp('Audrey', 'Smith', 'audrey1', 'cat', 'vocalist','audrey@gmail.com', 'Manhattan', '111-111-1111', 'abc');
	});
  	it('should update the reducer when the signup is succesful', function(){
  		const initialState = {
			userData: null,
			candidates: [],
			error: null
		};
		const nextState = appReducer(initialState, userActions.fetchSignUpSuccess({name: 'Audrey'}));
		nextState.should.deep.equal({userData: {name: 'Audrey'}, candidates: [], error: null});
  	})
  });