
const BlogActionTypes = {
  LOAD_DATA: 'Blog/LOAD_DATA',
};

const BlogActions = {

  loadInfo: payload => ({ type: BlogActionTypes.LOAD_DATA, payload }),

  loadCourseInfo: payload => (dispatch) => {
    const { data } = payload;
    const blogData = data.all_blogs;

    dispatch(BlogActions.loadInfo(blogData));
  },


};

export {
  BlogActionTypes,
  BlogActions,
};
