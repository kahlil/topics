/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { UtilService } from './util.service';

describe('Util Service', () => {
  beforeEachProviders(() => [UtilService]);

  it('should ...',
      inject([UtilService], (service: UtilService) => {
    expect(service).toBeTruthy();
  }));
});
