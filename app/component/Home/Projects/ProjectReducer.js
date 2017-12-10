// import { SplashActionTypes } from './SplashActions';
import { ProjectActionTypes } from './ProjectActions';

const initialState = {
  data: [],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProjectActionTypes.LOAD_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default projectReducer;
