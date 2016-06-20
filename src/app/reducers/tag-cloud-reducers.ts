export const tagCloudReducers = {
  receiveTags: (action, state) => {
    console.log(action);
    return action.data;
  }
};
