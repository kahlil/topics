/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { StoreService } from './store.service';

describe('Store Service', () => {
  beforeEachProviders(() => [StoreService]);

  it('should ...',
      inject([StoreService], (service: StoreService) => {
    expect(service).toBeTruthy();
  }));
});
