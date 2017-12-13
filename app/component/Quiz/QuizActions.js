
const QuizActionTypes = {
  LOAD_DATA: 'Quiz/LOAD_DATA',
  UPDATE_CURRENT_INDEX: 'Quiz/UPDATE_CURRENT_INDEX',
  LOAD_QUESTIONS: 'Quiz/LOAD_QUESTIONS',
  START_QUIZ: 'Quiz/START_QUIZ',
  START_TIMER: 'QUIZ/START_TIMER',
  STOP_TIMER: 'Quiz/STOP_TIMER',
  END_QUIZ: 'Quiz/END_QUIZ',
  HIDE_TIMER: 'Quiz/HIDE_TIMER',
};

const QuizActions = {

  updateCurrentIndex: payload => ({ type: QuizActionTypes.UPDATE_CURRENT_INDEX, payload }),

  loadInfo: payload => ({ type: QuizActionTypes.LOAD_DATA, payload }),

  startQuiz: () => ({ type: QuizActionTypes.START_QUIZ }),

  endQuiz: () => ({ type: QuizActionTypes.END_QUIZ }),

  startTimer: () => ({ type: QuizActionTypes.START_TIMER }),

  stopTimer: () => ({ type: QuizActionTypes.STOP_TIMER }),

  hideTimer: () => ({ type: QuizActionTypes.HIDE_TIMER }),

  loadQuestions: payload => ({ type: QuizActionTypes.LOAD_QUESTIONS, payload }),

  loadCourseInfo: payload => (dispatch) => {
    const { data } = payload;
    const quizInfo = data.slice(0, data.length - 1);

    console.log('Quiz Data', quizInfo);
    dispatch(QuizActions.loadInfo(quizInfo));
  },

  loadQuizQuestions: payload => (dispatch) => {
    const { data } = payload;
    const quizObject = data.slice(0, data.length - 1);

    // TODO: Don't forget to enable this
    // dispatch(QuizActions.loadQuestions(quizObject));
  },

};

export {
  QuizActionTypes,
  QuizActions,
};
