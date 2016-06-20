/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { OddStreamService } from './oddstream.service';
import { EffectsService } from './effects.service';
import { DataService } from './data.service';

beforeEachProviders(() => [AppComponent, OddStreamService, EffectsService, DataService]);

describe('App: Topics', () => {
  it('should create the app',
      inject([AppComponent, OddStreamService, EffectsService],
      (app: AppComponent, oddstream: OddStreamService, effects: EffectsService) => {
        expect(app).toBeTruthy();
      }
    )
  );

  it('should have as title \'Topics!\'',
      inject([AppComponent, OddStreamService, EffectsService],
      (app: AppComponent, oddstream: OddStreamService, effects: EffectsService) => {
    expect(app.title).toEqual('Topics');
  }));
});
