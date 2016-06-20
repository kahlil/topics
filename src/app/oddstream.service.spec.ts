/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { OddStreamService } from './oddstream.service';

describe('Oddstream Service', () => {
  beforeEachProviders(() => [OddStreamService]);

  it('should ...',
      inject([OddStreamService], (service: OddStreamService) => {
    expect(service).toBeTruthy();
  }));
});
