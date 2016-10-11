'use strict';
const RECEIVE_STORIES = 'RECEIVE_STORIES';

export const _receiveStories = stories => ({
  type: RECEIVE_STORIES,
  stories
});
