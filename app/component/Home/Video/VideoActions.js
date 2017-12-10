
const VideoActionTypes = {
  LOAD_DATA: 'VIDEO/LOAD_DATA',
};

const VideoActions = {

  loadInfo: payload => ({ type: VideoActionTypes.LOAD_DATA, payload }),

  loadCourseInfo: payload => (dispatch) => {
    const { data } = payload;

    dispatch(VideoActions.loadInfo(data[0]));
  },


};

export {
  VideoActionTypes,
  VideoActions,
};
