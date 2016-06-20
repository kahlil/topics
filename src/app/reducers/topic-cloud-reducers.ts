import { util } from '../util';

export const topicCloudReducers = {
  // Process the topics array.
  receiveTopics: (action, state) => {
    // The array is stored ion the data
    // property of the action.
    const topics = action.data;
    // Determine highest popularity value.
    const maxPopularity = util.getMaxPopularity(topics);
    // Add the size and the color to each topic
    // before returning it.
    return topics.map(topic => {
      const size = util.getSize(topic.sentimentScore, maxPopularity);
      const color = util.getColor(topic.sentimentScore);
      return Object.assign({ size, color }, topic);
    });
  },
};
