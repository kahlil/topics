import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OddStreamService } from './oddstream.service';
import { tagCloudReducers } from './reducers/tag-cloud-reducers';
import { tagDataReducers } from './reducers/tag-data-reducers';
import { UtilService } from './util.service';

@Injectable()
export class StoreService implements OnInit {
  tagCloudState$: Observable<any>;
  tagDataState$: Observable<any>;
  maxPopularity: number;

  constructor(
    private oddstream: OddStreamService,
    private util: UtilService
  ) {
    this.tagCloudState$ = this.oddstream.makeStateStream(tagCloudReducers)
      .map(topics => this.processData(topics))
      .publishReplay(1).refCount();
    this.tagDataState$ = Observable.combineLatest(
      this.tagCloudState$,
      this.oddstream.makeStateStream(tagDataReducers),
      (topics, topicId) => topics.find(topic => topic.id === topicId));
  }

  ngOnInit() {
    // this.tagCloudState$ = this.oddstream.makeStateStream(tagCloudReducers)
    //   .map(topics => this.processData(topics))
    //   .publishReplay(1).refCount();
    // this.tagDataState$ = Observable.combineLatest(
    //   this.tagCloudState$,
    //   this.oddstream.makeStateStream(tagDataReducers),
    //   (topics, topicId) => topics.find(topic => topic.id === topicId));
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
