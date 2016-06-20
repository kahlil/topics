import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OddStreamService } from './oddstream.service';
import { tagCloudReducers } from './reducers/tag-cloud-reducers';
import { tagDataReducers } from './reducers/tag-data-reducers';

@Injectable()
export class StoreService {
  public tagCloudState$: Observable<any>;
  public tagDataState$: Observable<any>;
  maxPopularity: number;

  constructor(oddstream: OddStreamService) {
    this.tagCloudState$ = oddstream.makeStateStream(tagCloudReducers)
      .map(topics => this.processData(topics))
      .publishReplay(1).refCount();
    this.tagDataState$ = oddstream.makeStateStream(tagDataReducers);
  }

  processData(topics) {
    this.setMaxPopularity(topics);
    return topics.map(topic => {
      const size = this.getSize(topic.sentimentScore);
      const color = this.getColor(topic.sentimentScore);
      return Object.assign({ size, color }, topic);
    });
  }

  setMaxPopularity(topics) {
    this.maxPopularity = topics.reduce((acc, topic) => {
      if (acc >= topic.sentimentScore) {
        return acc;
      }
      return topic.sentimentScore;
    }, 0);
  }

  getSize(sentimentScore) {
    const segment = this.maxPopularity / 6;
    return Math.ceil(sentimentScore / segment);
  }

  getColor(sentimentScore) {
    if (sentimentScore > 60) {
      return 1;
    } else if (sentimentScore < 40) {
      return 2;
    }
    return 3;
  }
}
