/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { EffectsService } from './effects.service';
import { DataService } from './data.service';
import { OddStreamService } from './oddstream.service';

describe('Effects Service', () => {
  beforeEachProviders(() => [EffectsService, DataService, OddStreamService]);

  it('should ...',
      inject([EffectsService], (service: EffectsService, data: DataService, oddstream: OddStreamService) => {
    expect(service).toBeTruthy();
  }));
});
