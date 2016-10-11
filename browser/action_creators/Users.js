'use strict';
const RECEIVE_USERS = 'RECEIVE_USERS';
const REMOVE_USER= 'REMOVE_USER';

export const _receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const _removeUser = user => ({
  type: REMOVE_USER,
  user
});

