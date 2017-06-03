var URL_USERS = "https://shrouded-ocean-80561.herokuapp.com/users"
var URL_LOGIN = "https://shrouded-ocean-80561.herokuapp.com/login"
var URL_LOGOUT = "https://shrouded-ocean-80561.herokuapp.com/logout"
var URL_ID = "https://shrouded-ocean-80561.herokuapp.com/users/id/"
var URL_USERS_EDITS = "https://shrouded-ocean-80561.herokuapp.com/users/"

import axios from 'axios';


export const fetchSignUp = (firstName, lastName, username, password, email, category, location, phone, bio) => dispatch => {
	console.log('execute signup');
	axios.post(URL_USERS, {
		firstName: firstName, 
		lastName: lastName, 
		username: username, 
		password: password,
		Email: email, 
		Category: category, 
		Location: location, 
		Phone: phone, 
		Bio: bio
	})
	.then(function (data) {
		console.log(data);
		dispatch(fetchSignUpSuccess(data));
	})
	.catch(function (error) {
		console.error(err);
		dispatch(fetchSignUpError());
	})
}

export const fetchLogIn = (username, password) => dispatch => {
	console.log('execute login');
	axios.post(URL_LOGIN, {
		username: username, 
		password: password
	})
	.then(function (data) {
		console.log('successful login');
		console.log(data);
		dispatch(fetchLogInSuccess(data));
	})
	.catch(function (error) {
		console.error(err);
		dispatch(fetchLogInError());
	})
}

export const fetchLogOut = () => dispatch => {
	console.log('execute logout');
	axios.delete(URL_LOGOUT, {})
		

    .then(function (data) {
		console.log(data);
		dispatch(fetchLogOutSuccess(data));
	})
	.catch(function (error) {
		console.error(err);
		dispatch(fetchLogOutError());

	})
}

export const fetchUserData = () => dispatch => {
	console.log('show saved data');
	axios.get(URL_ID, {})
	.then(function (response) {
		console.log(response.data);
		dispatch(fetchEditSearchSuccess(response.data));
	})
	.catch(function (error) {
  		console.error(error);
		dispatch(fetchEditSearchError(error));
  	})
}

export const fetchEdit = (firstName, lastName, category, location, email, phone, bio) => dispatch => {
	console.log('execute edit');
	axios.put(URL_USERS_EDITS, {
			firstName: firstName, 
			lastName: lastName,  
			Category: category, 
			Location: location,
			Email: email, 
			Phone: phone, 
			Bio: bio
		})
	.then(function (data) {
		console.log(data);
		dispatch(fetchEditSuccess(data));
	})
	.catch(function (error) {
		console.error(err);
		dispatch(fetchEditError());
	})
}

  export const fetchSearch = (category, location) => dispatch => {
  	console.log('execute search');
  	 axios.get(URL_USERS, {
  	 		params: {
  			category: category, 
			location: location 
		}
	   })
	.then(function (response) {
  		console.log("SEARCH:: ",response);
		dispatch(fetchSearchSuccess(response.data));
  	})
  	.catch(function (err) {
  		console.error(err);
		dispatch(fetchSearchError(err));
  	})
  	
  }


export const FETCH_SIGNUP_SUCCESS = 'FETCH_SIGNUP_SUCCESS';
export const fetchSignUpSuccess = (userData) => ({
	type: FETCH_SIGNUP_SUCCESS,
	userData
});
export const FETCH_SIGNUP_ERROR = 'FETCH_SIGNUP_ERROR';
export const fetchSignUpError = (error) => ({
	type: FETCH_SIGNUP_ERROR,
	error
});

export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const fetchLogInSuccess = (userData) => ({
	type: FETCH_LOGIN_SUCCESS,
	userData
});
export const FETCH_LOGIN_ERROR = 'FETCH_LOGIN_ERROR';
export const fetchLogInError = (error) => ({
	type: FETCH_LOGIN_ERROR,
	error
});

export const FETCH_LOGOUT_SUCCESS = 'FETCH_LOGOUT_SUCCESS';
export const fetchLogOutSuccess = (userData) => ({
	type: FETCH_LOGOUT_SUCCESS,
	userData
});
export const FETCH_LOGOUT_ERROR = 'FETCH_LOGOUT_ERROR';
export const fetchLogOutError = (error) => ({
	type: FETCH_LOGOUT_ERROR,
	error
});

export const FETCH_EDIT_SEARCH_SUCCESS = 'FETCH_EDIT_SEARCH_SUCCESS';
export const fetchEditSearchSuccess = (userData) => ({
	type: FETCH_EDIT_SEARCH_SUCCESS,
	userData
});
export const FETCH_EDIT_SEARCH_ERROR = 'FETCH_EDIT_SUCCESS_ERROR';
export const fetchEditSearchError = (error) => ({
	type: FETCH_EDIT_SEARCH_ERROR,
	error
});

export const FETCH_EDIT_SUCCESS = 'FETCH_EDIT_SUCCESS';
export const fetchEditSuccess = (userData) => ({
	type: FETCH_EDIT_SUCCESS,
	userData
});
export const FETCH_EDIT_ERROR = 'FETCH_EDIT_ERROR';
export const fetchEditError = (error) => ({
	type: FETCH_EDIT_ERROR,
	error
});

export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const fetchSearchSuccess = (candidates) => ({
	type: FETCH_SEARCH_SUCCESS,
	candidates
});
export const FETCH_SEARCH_ERROR = 'FETCH_SEARCH_ERROR';
export const fetchSearchError = (error) => ({
	type: FETCH_SEARCH_ERROR,
	error
});