
const StoryActionTypes = {
  LOAD_DATA: 'Story/LOAD_DATA',
  LOAD_SUBSCRIPTION_STATUS: 'Story/LOAD_SUBSCRIPTION_STATUS',
};

const StoryActions = {

  loadInfo: payload => ({ type: StoryActionTypes.LOAD_DATA, payload }),

  loadSubscriptionStatus: payload => ({ type: StoryActionTypes.LOAD_SUBSCRIPTION_STATUS, payload }),

  loadCourseInfo: payload => (dispatch) => {
    const { data } = payload;
    const subscriptionStatus = data[data.length - 1];
    const courseData = data.slice(0, data.length - 1);

    dispatch(StoryActions.loadInfo(courseData));
    dispatch(StoryActions.loadSubscriptionStatus(subscriptionStatus));
  },


};

export {
  StoryActionTypes,
  StoryActions,
};
