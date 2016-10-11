import { createStore } from 'redux';

const initialState = {
  users: [],
  stories: []
};

export default createStore(reducer);

function reducer (state = initialState, action) {
  switch (action.type) {
    
    case 'RECEIVE_USERS':
      return Object.assign({}, state, {
        users: action.users
      });
    
    case 'REMOVE_USER':
      return Object.assign({}, state, {
        users: state.users.filter(user => user.id === action.id);
      });
          
    default: 
      return state;
  }
}