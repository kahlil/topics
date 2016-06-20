import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { topics } from './topics';
import { OddStreamService } from './oddstream.service';
import { RECEIVE_TAGS } from './action/action-constants';


@Injectable()
export class DataService {
  constructor(private oddstream: OddStreamService) {}

  getTopics() {
    // Make async. Normally we would get
    // the data from the server.
    setTimeout(() => {
      this.oddstream.dispatch(Observable.of(topics.topics), RECEIVE_TAGS);
    }, 0);
  }
}
