
const ScoreCardActionTypes = {
  LOAD_DATA: 'ScoreCard/LOAD_DATA',
  LOAD_TIME_SPENT: 'ScoreCard/LOAD_TIME_SPENT',
};

const ScoreCardActions = {

  loadInfo: payload => ({ type: ScoreCardActionTypes.LOAD_DATA, payload }),

  loadCourseInfo: payload => (dispatch) => {
    const { data } = payload;
    // const courseData = data.slice(0, data.length - 1);

    dispatch(ScoreCardActions.loadInfo(data));
  },

  loadTotalTimeSpent: payload => ({ type: ScoreCardActionTypes.LOAD_TIME_SPENT, payload }),
};

export {
  ScoreCardActionTypes,
  ScoreCardActions,
};
