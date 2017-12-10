import { StackNavigator } from 'react-navigation';

import Quiz from './Quiz';
import QuizAnalysis from './QuizAnalysis';
import QuestionAnswer from './QuestionAnswer';

const Routes = {
  Quiz: { screen: Quiz },
  QuizAnalysis: { screen: QuizAnalysis },
  QuestionAnswer: { screen: QuestionAnswer },
};

export default StackNavigator(Routes);
