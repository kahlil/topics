import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OddStreamService } from './oddstream.service';
import { topicCloudReducers } from './reducers/topic-cloud-reducers';
import { topicDataReducers } from './reducers/topic-data-reducers';
import { UtilService } from './util.service';

@Injectable()
export class StoreService {
  topicCloudState$: Observable<any>;
  topicDataState$: Observable<any>;
  maxPopularity: number;

  constructor(
    private oddstream: OddStreamService,
    private util: UtilService
  ) {
    this.topicCloudState$ = this.oddstream.makeStateStream(topicCloudReducers)
      .map(topics => this.processData(topics))
      .publishReplay(1).refCount();

    this.topicDataState$ = Observable.combineLatest(
      this.topicCloudState$,
      this.oddstream.makeStateStream(topicDataReducers),
      (topics, topicId) => topics.find(topic => topic.id === topicId))
      .publishReplay(1).refCount();
  }

  processData(topics) {
    this.maxPopularity = this.util.getMaxPopularity(topics);
    return topics.map(topic => {
      const size = this.util.getSize(topic.sentimentScore, this.maxPopularity);
      const color = this.util.getColor(topic.sentimentScore);
      return Object.assign({ size, color }, topic);
    });
  }
}
