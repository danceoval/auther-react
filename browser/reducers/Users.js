'use strict';

const RECEIVE_USERS = 'RECEIVE_USERS';
const REMOVE_USER= 'REMOVE_USER';
const initialState = [] ;

export default function users (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USERS:
    	return action.users
    case REMOVE_USER:
    	return  state.filter((user) => {
    				//console.log('id', user.id, action.user.id)
    				return user.id !== action.user.id
    			})
    			
    default: return state;
  }
}
