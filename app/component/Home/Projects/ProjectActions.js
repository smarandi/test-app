
const ProjectActionTypes = {
  LOAD_DATA: 'PROJECT/LOAD_DATA',
};

const ProjectActions = {

  loadInfo: payload => ({ type: ProjectActionTypes.LOAD_DATA, payload }),

  loadCourseInfo: payload => (dispatch) => {
    const { data } = payload;
    const courseData = data.slice(0, data.length - 1);

    dispatch(ProjectActions.loadInfo(courseData));
  },


};

export {
  ProjectActionTypes,
  ProjectActions,
};
