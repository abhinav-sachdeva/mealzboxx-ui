import { user } from "./actionTypes";

const userActions = {
	loginUser: (authData) => dispatch => {
		dispatch({ type: user.INTIATE_LOGIN })
		return fetch('https://jsonplaceholder.typicode.com/users/1')
			.then(response => response.json())
			.then(json => dispatch({ type: user.LOGIN_SUCCESS, payload: json.address.zipcode }))
			.catch(err => dispatch({ type: user.LOGIN_FAILURE, payload: err }))
	}
}

export default userActions;
