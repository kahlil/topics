import {
  GET_TOPICS,
  RECEIVE_TOPICS,
  CLICK_TOPIC
} from './action-constants';

// All action creator functions for this application.
export const actionCreators = {
  getTopics: () => ({ type: GET_TOPICS }),
  receiveTopics: data => ({ type: RECEIVE_TOPICS, data }),
  clickTopic: data => ({ type: CLICK_TOPIC, data }),
};
