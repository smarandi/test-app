import { StackNavigator } from 'react-navigation';

import Quiz from './Quiz';
import QuestionAnswer from './QuestionAnswer';
import QuizAnalysis from './QuizAnalysis';

const Routes = {
  QuizAnalysis: { screen: QuizAnalysis },
  QuestionAnswer: { screen: QuestionAnswer },
  Quiz: { screen: Quiz },
};

export default StackNavigator(Routes);
