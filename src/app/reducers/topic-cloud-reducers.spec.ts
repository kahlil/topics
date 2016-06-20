/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { topicCloudReducers } from './topic-cloud-reducers';

describe('topicCloudReducers', () => {
  it('should have a receiveTopics function', inject([], () => {
    expect(typeof topicCloudReducers.receiveTopics).toEqual('function');
  }));
});
