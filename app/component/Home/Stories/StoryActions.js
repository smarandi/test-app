
const StoryActionTypes = {
  LOAD_DATA: 'VIDEO/LOAD_DATA',
};

const StoryActions = {

  loadInfo: payload => ({ type: StoryActionTypes.LOAD_DATA, payload }),

  loadCourseInfo: payload => (dispatch) => {
    const { data } = payload;

    dispatch(StoryActions.loadInfo(data));
  },


};

export {
  StoryActionTypes,
  StoryActions,
};
