import { createStore } from 'redux';

const initialState = {users :[]};

function reducer (state = initialState, action) {
  switch (action.type) {
    case "RECEIVE_USERS":
    	console.log('a', action)
    	return {users: action.users}
    default: return state;
  }
}

export default createStore(reducer);