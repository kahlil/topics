/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { OddStreamService } from './oddstream.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/observable/combineLatest';

describe('Oddstream Service', () => {
  beforeEachProviders(() => [OddStreamService]);

  it('should ...',
      inject([OddStreamService], (service: OddStreamService) => {
    expect(service).toBeTruthy();
  }));
});
