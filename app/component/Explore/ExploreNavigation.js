import { StackNavigator } from 'react-navigation';
import Home from './Explore';
// import StoryNavigation from './StoryNavigation';
// import Story from '../Home/Stories/Stories';

import Blog from '../Home/Blogs/Blogs';
import Video from '../Home/Video/Video';
import Journey from '../Home/Journey/Journey';
import Projects from '../Home/Projects/Projects';
import StoryDetails from '../Home/Stories/StoryDetails';

const Routes = {
  Home: { screen: Home },
  Journey: { screen: Journey },
  StoryNavigation: { screen: StoryDetails },
  Projects: { screen: Projects },
  Blog: { screen: Blog },
  Video: { screen: Video },
};

export default StackNavigator(Routes);
