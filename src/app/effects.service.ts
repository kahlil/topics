import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { OddStreamService } from './oddstream.service';
import { GET_TAGS } from './action/action-constants';

@Injectable()
export class EffectsService {
  dispatcher$;

  constructor(
    private getData: DataService,
    private oddstream: OddStreamService
  ) {
    this.dispatcher$ = oddstream.getDispatcher$();
  }

  runEffects() {
    this.dispatcher$
      .subscribe(action => {
        switch (action.type) {
          case GET_TAGS:
            this.getData.getTopics();
            break;
          default:
            break;
        }
      });
  }
}
