// import { SplashActionTypes } from './SplashActions';
import { StoryActionTypes } from './StoryActions';

const initialState = {
  data: [],
};

const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case StoryActionTypes.LOAD_DATA:
      return { ...state, course: action.payload };
    default:
      return state;
  }
};

export default storyReducer;
