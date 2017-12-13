// import { SplashActionTypes } from './SplashActions';
import { QuizActionTypes } from './QuizActions';

const initialState = {
  data: [],
  courses: [],
  currentIndex: 0,
  startTimer: false,
  quizEnded: false,
  startModalOpen: true,
  showTimer: true,
  progress: 10,
  quizState: {
    currentQuestionIndex: 0,
  },
  quizObject:
    {
      uuid: '92984c62885c',
      quiz_name: 'quiz 1',
      questions: [
        {
          uuid: '2cade43a6bb5',
          question: 'who is dennis ritchie ?',
          option_type: 'mutiple',
          marks: 10,
          options: [
            {
              uuid: '116879b9565a',
              choice: 'scientist',
            },
            {
              uuid: 'd559137c9cd8',
              choice: 'player',
            },
          ],
        },
        {
          uuid: '373e51c52a73',
          question: 'who is creator of c++ ?',
          option_type: 'single',
          marks: 12,
          options: [
            {
              uuid: 'e109b5b09ea3',
              choice: 'Bjarne Stroustrup',
            },
            {
              uuid: 'a3c172282e11',
              choice: 'sachin tendulkar',
            },
          ],
        },
      ],
    },
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case QuizActionTypes.LOAD_DATA:
      return { ...state, data: action.payload };
    case QuizActionTypes.UPDATE_CURRENT_INDEX:
      return { ...state, currentIndex: action.payload };
    case QuizActionTypes.LOAD_QUESTIONS:
      return { ...state, questions: action.payload };
    case QuizActionTypes.START_QUIZ:
      return { ...state, startTimer: true, startModalOpen: false };
    case QuizActionTypes.START_TIMER:
      return { ...state, showTimer: true };
    case QuizActionTypes.STOP_TIMER:
      return { ...state, startTimer: false };
    case QuizActionTypes.END_QUIZ:
      return { ...state, quizEnded: true };
    case QuizActionTypes.HIDE_TIMER:
      return { ...state, showTimer: false };
    default:
      return state;
  }
};

export default quizReducer;
