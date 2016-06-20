import {
  GET_TAGS,
  RECEIVE_TAGS,
  CLICK_TAG
} from './action-constants';

export const actionCreators = {
  getTags: () => ({ type: GET_TAGS }),
  receiveTags: data => ({ type: RECEIVE_TAGS, data }),
  clickTag: data => ({ type: CLICK_TAG, data }),
};
