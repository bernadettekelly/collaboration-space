var URL_USERS = "http://localhost:8080/users"
var URL_LOGIN = "http://localhost:8080/users/login"
var URL_LOGOUT = "http://localhost:8080/users/logout"
var URL_ID = "http://localhost:8080/users/id/"
var URL_USERS_EDITS = "http://localhost:8080/users/"

//import qwest from 'qwest';


export const fetchSignUp = (firstName, lastName, username, password, email, category, location, phone, bio) => dispatch => {
	console.log('execute signup');
	fetch(URL_USERS, {
	 	method: 'post',
	 	body: JSON.stringify({
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
	})
	.then((xhr, data) => {
		console.log(data);
		dispatch(fetchSignUpSuccess(data));
	})
	.catch((err) => {
		console.error(err);
		dispatch(fetchSignUpError());
	})
}

export const fetchLogIn = (username, password) => dispatch => {
	console.log('execute login');
	qwest.post(URL_LOGIN, {
		username: username, 
		password: password
	}, {dataType: 'json'})
	.then((xhr, data) => {
		console.log('successful login');
		console.log(data);
		dispatch(fetchLogInSuccess(data));
	})
	.catch((err) => {
		console.error(err);
		dispatch(fetchLogInError());
	})
}

export const fetchLogOut = () => dispatch => {
	console.log('execute logout');
	qwest.delete(URL_LOGOUT, {
		},	{dataType: 'json'})

    .then((xhr, data) => {
		console.log(data);
		dispatch(fetchLogOutSuccess(data));
	})
	.catch((err) => {
		console.error(err);
		dispatch(fetchLogOutError());

	})
}

export const fetchUserData = () => dispatch => {
	console.log('show saved data');
	qwest.get(URL_ID, {}, {dataType: 'json'})
	.then((xhr, data) => {
		console.log(data);
		dispatch(fetchEditSearchSuccess(data));
	})
	.catch((err) => {
  		console.error(err);
		dispatch(fetchEditSearchError(err));
  	})
}

export const fetchEdit = (firstName, lastName, category, location, email, phone, bio) => dispatch => {
	console.log('execute edit');
	qwest.put(URL_USERS_EDITS, {
			firstName: firstName, 
			lastName: lastName,  
			Category: category, 
			Location: location,
			Email: email, 
			Phone: phone, 
			Bio: bio
		}, {dataType: 'json'})
	.then((xhr, data) => {
		console.log(data);
		dispatch(fetchEditSuccess(data));
	})
	.catch((err) => {
		console.error(err);
		dispatch(fetchEditError());
	})
	//NEED TO SHOW VALUE OF PREVIOUSLY SAVED PROFILE INFO
}

  export const fetchSearch = (category, location) => dispatch => {
  	console.log('execute search');
  	 qwest.get(URL_USERS, {
  			category: category, 
			location: location 
	   })
	.then((xhr, data) => {
  		console.log(data);
		dispatch(fetchSearchSuccess(data));
  	})
  	.catch((err) => {
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