/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TagComponent } from './tag.component';

describe('Component: Tag', () => {
  it('should create an instance', () => {
    let component = new TagComponent();
    expect(component).toBeTruthy();
  });
});
