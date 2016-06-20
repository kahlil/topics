// Utility functions for dealing with
// topics data.
export const util = {
  // Get the highest sentimentScore from the given
  // dataset.
  getMaxPopularity(topics) {
    return topics.reduce((acc, topic) => {
      if (acc >= topic.sentimentScore) {
        return acc;
      }
      return topic.sentimentScore;
    }, 0);
  },

  // Get the corresponding text size
  // for a given sentimentScore.
  getSize(sentimentScore, maxPop) {
    const segment = maxPop / 6;
    return Math.ceil(sentimentScore / segment);
  },

  // Get the corresponding text color
  // for a given sentimentScore.
  getColor(sentimentScore) {
    if (sentimentScore > 60) {
      return 1;
    } else if (sentimentScore < 40) {
      return 2;
    }
    return 3;
  },
};
