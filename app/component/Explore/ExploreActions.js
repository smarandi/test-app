
const ExploreActionTypes = {
  LOAD_DATA: 'EXPLORE/LOAD_DATA',
  LOAD_SUBSCRIPTION_STATUS: 'EXPLORE/LOAD_SUBSCRIPTION_STATUS',
};

const ExploreActions = {

  loadCourseInfo: payload => ({ type: ExploreActionTypes.LOAD_DATA, payload }),

  loadSubscriptionStatus: payload => ({ type: ExploreActionTypes.LOAD_SUBSCRIPTION_STATUS, payload }),

  loadData: payload => (dispatch) => {
    const { data } = payload;

    const subscriptionStatus = data[data.length - 1];
    const courseData = data.slice(0, data.length - 1);

    dispatch(ExploreActions.loadCourseInfo(courseData));
    dispatch(ExploreActions.loadSubscriptionStatus(subscriptionStatus));
  },

};

export {
  ExploreActionTypes,
  ExploreActions,
};
