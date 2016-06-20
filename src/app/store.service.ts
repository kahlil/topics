import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OddStreamService } from './oddstream.service';
import { topicCloudReducers } from './reducers/topic-cloud-reducers';
import { topicDataReducers } from './reducers/topic-data-reducers';

@Injectable()
export class StoreService {
  topicCloudState$: Observable<any>;
  topicDataState$: Observable<any>;

  constructor(private oddstream: OddStreamService) {
    // Make the state stream
    this.topicCloudState$ = this.oddstream.makeStateStream(topicCloudReducers);

    // For the topic data we take the id data from the
    // click action and use combineLatest to retrieve the topic
    // data from the the topicCloudState stream.
    this.topicDataState$ = Observable.combineLatest(
      this.topicCloudState$,
      this.oddstream.makeStateStream(topicDataReducers),
      (topics, topicId) => topics.find(topic => topic.id === topicId))
      .publishReplay(1).refCount();
  }
}
