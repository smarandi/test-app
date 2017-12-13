// import { SplashActionTypes } from './SplashActions';
import { StoryActionTypes } from './StoryActions';

const initialState = {
  data: [],
  subscription: 'TRIAL',
};

const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case StoryActionTypes.LOAD_DATA:
      return { ...state, data: action.payload };
    case StoryActionTypes.LOAD_SUBSCRIPTION_STATUS:
      return { ...state, subscription: action.payload };
    default:
      return state;
  }
};

export default storyReducer;
