/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { EffectsService } from './effects.service';

describe('Effects Service', () => {
  beforeEachProviders(() => [EffectsService]);

  it('should ...',
      inject([EffectsService], (service: EffectsService) => {
    expect(service).toBeTruthy();
  }));
});
