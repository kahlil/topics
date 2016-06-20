import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
  getMaxPopularity(topics) {
    return topics.reduce((acc, topic) => {
      if (acc >= topic.sentimentScore) {
        return acc;
      }
      return topic.sentimentScore;
    }, 0);
  }

  getSize(sentimentScore, maxPop) {
    const segment = maxPop / 6;
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
