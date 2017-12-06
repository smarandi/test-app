import { StackNavigator } from 'react-navigation';
import Home from './Explore';
// import StoryNavigation from './StoryNavigation';
// import Story from '../Home/Stories/Stories';

import Blog from '../Home/Blogs/Blogs';
import Video from '../Home/Video/Video';
import Journey from '../Home/Journey/Journey';
import Projects from '../Home/Projects/Projects';
import Story from '../Home/Stories/StoryWrapper';

const Routes = {
  Home: { screen: Home },
  Story: { screen: Story },
  Journey: { screen: Journey },
  Projects: { screen: Projects },
  Blog: { screen: Blog },
  Video: { screen: Video },
};

export default StackNavigator(Routes);
