
export function receiveUsers(users) {
  return { 
    type: 'RECEIVE_USERS', 
    users 
  }
}

export function removeUser(id) {
  return { 
    type: 'RECEIVE_USER', 
    id 
  }
}
