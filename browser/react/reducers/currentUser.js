const SET_CURRENT_USER = 'SET_CURRENT_USER'; 
const initialCurrentUser = null;

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
});

export default function currentUser (state = initialCurrentUser, action) {  
  switch (action.type) {
    
    case SET_CURRENT_USER: 
      return action.user;

    default: return state;
  }
}
