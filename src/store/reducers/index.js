import * as actionTypes from "../actions/actionTypes"

const defaultState = {
	auth: {
		inProgress: false,
		error: null,
		token: null,
		timestamp: null
	}
}
const updateAuth = (updates, state) => ({ ...state, auth: { ...state.auth, ...updates, timestamp: Date.now() } })

const rootReducer = (state = defaultState, action) => {
	console.log(action)
	switch (action.type) {
		case actionTypes.user.INTIATE_LOGIN:
			return updateAuth({ inProgress: true }, state);
		case actionTypes.user.LOGIN_SUCCESS:
			return updateAuth({ inProgress: false, error: null, token: action.payload }, state);
		case actionTypes.user.LOGIN_FAILURE:
			return updateAuth({ inProgress: false, error: action.payload, token: null }, state);

		case actionTypes.user.INTIATE_LOGOUT:
		case actionTypes.user.LOGOUT_SUCCESS:
		case actionTypes.user.LOGOUT_FAILURE:
			return state;
		default:
			return state;
	}
}
export default rootReducer;