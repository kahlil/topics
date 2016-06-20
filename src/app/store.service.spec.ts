/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { StoreService } from './store.service';
import { OddStreamService } from './oddstream.service';

describe('Store Service', () => {
  beforeEachProviders(() => [StoreService, OddStreamService]);

  it('should ...', inject([StoreService, OddStreamService], (service: StoreService, oddstream: OddStreamService) => {
    expect(service).toBeTruthy();
  }));
});
