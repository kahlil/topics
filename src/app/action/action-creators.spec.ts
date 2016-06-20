/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { actionCreators } from './action-creators';

describe('actionCreators', () => {
  it('should have a getTopics function', inject([], () => {
    expect(typeof actionCreators.getTopics).toEqual('function');
  }));

  it('should have a receiveTopics function', inject([], () => {
    expect(typeof actionCreators.receiveTopics).toEqual('function');
  }));

  it('should have a clickTopic function', inject([], () => {
    expect(typeof actionCreators.clickTopic).toEqual('function');
  }));
});
