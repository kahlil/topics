/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { topicDataReducers } from './topic-data-reducers';

describe('topicDataReducers', () => {
  it('should have a receiveTopics function', inject([], () => {
    expect(typeof topicDataReducers.clickTopic).toEqual('function');
  }));
});
