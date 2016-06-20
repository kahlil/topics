import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { OddStreamService } from './oddstream.service';
import { GET_TOPICS } from './action/action-constants';

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
          case GET_TOPICS:
            this.getData.getTopics();
            break;
          default:
            break;
        }
      });
  }
}
