/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { util } from './util';

describe('util helpers', () => {
  it('should have a getMaxPopularity function', inject([], () => {
    expect(typeof util.getMaxPopularity).toEqual('function');
  }));

  it('should have a getSize function', inject([], () => {
    expect(typeof util.getSize).toEqual('function');
  }));

  it('should have a getColor function', inject([], () => {
    expect(typeof util.getColor).toEqual('function');
  }));
});
