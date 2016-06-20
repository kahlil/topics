/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { DataService } from './data.service';
import { OddStreamService } from './oddstream.service';

describe('GetData Service', () => {
  beforeEachProviders(() => [DataService, OddStreamService]);

  it('should ...', inject([DataService],
    (service: DataService, oddstream: OddStreamService) => {
      expect(service).toBeTruthy();
    }
  ));
});
