import { combineReducers } from 'redux';

import splash from './component/Splash/SplashReducer';

import auth from './component/Authentication/AuthReducer';

import explore from './component/Explore/ExploreReducer';

import video from './component/Home/Video/VideoReducer';

import story from './component/Home/Stories/StoryReducer';

import project from './component/Home/Projects/ProjectReducer';

import blog from './component/Home/Blogs/BlogReducer';

import scoreCard from './component/ScoreCard/ScoreCardReducer';

import quiz from './component/Quiz/QuizReducer';

export default combineReducers({
  splash,
  auth,
  explore,
  video,
  story,
  project,
  blog,
  scoreCard,
  quiz,
});
