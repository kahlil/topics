import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { topics } from './topics';
import { OddStreamService } from './oddstream.service';
import { RECEIVE_TOPICS } from './action/action-constants';


@Injectable()
export class DataService {
  constructor(private oddstream: OddStreamService) {}

  // This function returns the data
  // array asynchronously.
  // The data is inserted into the unidirectional
  // dataflow cycle via an oddstream dispatch. 
  getTopics() {
    // Make async. Normally we would get
    // the data from the server.
    setTimeout(() => {
      this.oddstream.dispatch(Observable.of(topics.topics), RECEIVE_TOPICS);
    }, 0);
  }
}
