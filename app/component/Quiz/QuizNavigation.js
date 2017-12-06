import { StackNavigator } from 'react-navigation';

import Quiz from './Quiz';
import QuizAnalysis from './QuizAnalysis';
import QuestionAnswer from './QuestionAnswer';

const Routes = {
  QuizAnalysis: { screen: QuizAnalysis },
  QuestionAnswer: { screen: QuestionAnswer },
  Quiz: { screen: Quiz },
};

export default StackNavigator(Routes);
