import { StackNavigator } from 'react-navigation';
import Home from './Explore';
// import StoryNavigation from './StoryNavigation';
// import Story from '../Home/Stories/Stories';

import Blog from '../Home/Blogs/Blogs';
import Video from '../Home/Video/Video';
import Journey from '../Home/Journey/Journey';
import Projects from '../Home/Projects/Projects';
import Story from '../Home/Stories/Stories';
import DetailView from '../Home/Common/SecondView';

const Routes = {
  Home: { screen: Home },
  Journey: { screen: Journey },
  Story: { screen: Story },
  Projects: { screen: Projects },
  Blog: { screen: Blog },
  Video: { screen: Video },
  Detail: { screen: DetailView },
};

export default StackNavigator(Routes);
