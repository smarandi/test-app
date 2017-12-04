import { StackNavigator } from 'react-navigation';
import Stories from './Stories';
import StoryDetails from './StoryDetails';

const Routes = {
  Stories: { screen: Stories },
  StoryDetails: { screen: StoryDetails },
};

export default StackNavigator(Routes);
