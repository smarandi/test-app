import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableOpacity, Platform, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
// import Toast from 'react-native-simple-toast';

import COLORS from '../../styles/Common/Colors';
import { INDEX_TO_ALPHABET } from '../../scripts/Quiz/Enums';
import QuestionAnswerStyles from '../../styles/Quiz/QuestionAnswer';

import Background from '../../assets/img/quiz/background.png';
import BadScore from '../../assets/img/quiz/bad-score.png';
import ExcellentScore from '../../assets/img/quiz/excellent-score.png';
import GoodScore from '../../assets/img/quiz/good-score.png';

import Questions from './SampleQuestions.json';
import Video from '../Home/Video/Video';
import { QuizActions } from './QuizActions';
import { validateAnswer } from '../../services/Quiz';

// const question = {
//   question_id: 'abc123',
//   question_no: '1',
//   question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
//   options: ['Lorem', 'ipsum', 'dolor', 'sit'],
//   answer: 'Lorem',
// };

@connect(store => ({ auth: store.auth, quiz: store.quiz }))
class QuestionAnswer extends Component {
  static navigationOptions = {
    title: 'Quizzes',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE },
  };

  static propTypes={
    navigation: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    quiz: PropTypes.object.isRequired,
  };

  state = {
    progress: 10,
    // quizEnded: false,
    // startModalOpen: true,
    // showTimer: true,
  };

  decreaseTime = () => {
    if (this.state.progress !== 0) {
      this.setState({ progress: this.state.progress - 1 });
    }
  };


  getWidth = timerValue => (100 - ((10 - timerValue) * 10));

  evaluateAnswer = (selectedAnswerIndex, optionId) => {
    console.log('Entering Evaluate Answer');
    /* TODO: ADD Authentication Things */
    this.props.dispatch(QuizActions.stopTimer());
    this.props.dispatch(QuizActions.hideTimer());

    const { uuid: quizId, questions } = this.props.quiz.quizObject;
    const { currentQuestionIndex } = this.props.quiz.quizState;

    const questionId = questions[currentQuestionIndex].uuid;
    const { courseId } = this.props.navigation.state.params;
    const timeTakenToAnswer = this.state.progress;
    const quizResponseObject = {
      quiz_id: quizId,
      question_id: questionId,
      course_uuid: courseId,
      answer_id: [optionId],
    };

    console.log('Params', this.props.navigation.state.params);
    console.log('Time ', timeTakenToAnswer);
    console.log('Response ', quizResponseObject);

    validateAnswer(quizResponseObject)
      .then(data => console.log('I am a success', data))
      .catch(err =>);
  };

  handleActionClick = () => {
    this.props.dispatch(QuizActions.endQuiz());
    this.props.navigation.navigate('QuizAnalysis');
  };

  handleStartActionClick = () => {
    this.props.dispatch(QuizActions.startQuiz());
  };

  // this.setState({ quizEnded: false });
  // this.setState({ startModalOpen: false });
  // {
  //   this.setState({ startModalOpen: false });
  //   setTimeout(() => this.decreaseTime(), 1000);
  // };

  renderOptions = (option, index) => (
    <TouchableOpacity
      key={index}
      style={QuestionAnswerStyles.singleOptionContainer}
      onPress={() => this.evaluateAnswer(index, option.uuid)}
    >
      <Text style={QuestionAnswerStyles.optionText}>
        {INDEX_TO_ALPHABET[index]}. {option.choice}
      </Text>
    </TouchableOpacity>
  );

  renderInterface = (question, currentQuestionIndex) => {
    const { question: query, options } = question;
    return (
      <View>
        <View style={QuestionAnswerStyles.sliderAndTimerContainer}>
          {
            // this.props.quiz.showTimer &&
            (
              <View style={QuestionAnswerStyles.timerContainer}>
                <Text style={QuestionAnswerStyles.timerText}>{this.state.progress} sec</Text>
              </View>
            )
          }
          {
            // this.props.quiz.showTimer &&
            (
              <View style={QuestionAnswerStyles.sliderContainer}>
                <View style={QuestionAnswerStyles.sliderExternal}>
                  <View style={{
                    width: `${this.getWidth(this.state.progress)}%`,
                    height: '100%',
                    backgroundColor: COLORS.MAGENTA_SHADE,
                    borderRadius: 15,
                  }}
                  />
                </View>
              </View>
            )
          }
          <Text style={{ fontSize: 18 }}>
            {currentQuestionIndex + 1}/ {this.props.quiz.quizObject.questions.length || 0}
          </Text>
        </View>
        <View style={{ flex: 4 }}>
          <View style={QuestionAnswerStyles.questionContainer}>
            <Text style={QuestionAnswerStyles.questionNumber}>
              {currentQuestionIndex + 1}.
            </Text>
            <View style={QuestionAnswerStyles.questionTextContainer}>
              <Text style={QuestionAnswerStyles.questionText}>
                {query}
              </Text>
            </View>
          </View>
          <View style={QuestionAnswerStyles.optionsContainer}>
            {options.map((option, index) => this.renderOptions(option, index))}
          </View>
        </View>
      </View>
    );
  };

  render() {
    // console.log('Props', this.props.navigation.state.params);
    const { questions } = this.props.quiz.quizObject;
    const { currentQuestionIndex } = this.props.quiz.quizState;

    if (this.props.quiz.startTimer) {
      setTimeout(() => this.decreaseTime(), 1000);
    }
    console.log(this.props.quiz.quizEnded);

    return (this.props.quiz && questions.length === 0 ?
      <Text>Getting Questions</Text> :
      <ScrollView style={QuestionAnswerStyles.mainContainer}>
        {this.renderInterface(questions[currentQuestionIndex], currentQuestionIndex)}
        <Modal isVisible={this.props.quiz.quizEnded}>
          <View style={QuestionAnswerStyles.modalContainer}>
            <View style={QuestionAnswerStyles.modal}>
              <Image
                style={{ width: '100%', height: '90%' }}
                source={Background}
                resizeMode="contain"
              />
              <View style={QuestionAnswerStyles.modalInfoContainer}>
                <Text style={{ fontSize: 18, color: COLORS.WHITE }}>Good going Nithin!</Text>
                <Image
                  source={GoodScore}
                  style={{ width: 150, height: 150 }}
                />
                <Text style={{ fontSize: 16, color: COLORS.WHITE }}>You Scored</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 24, color: COLORS.MAGENTA_SHADE }}>7</Text>
                  <Text style={{ fontSize: 20, color: COLORS.WHITE }}>/10</Text>
                </View>
              </View>
              <TouchableOpacity style={Platform.select(QuestionAnswerStyles.modalCta)} onPress={() => this.handleActionClick()}>
                <Text style={QuestionAnswerStyles.modalCtaText}>Analysis</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal isVisible={this.props.quiz.startModalOpen}>
          <View style={QuestionAnswerStyles.modalContainer}>
            <View style={QuestionAnswerStyles.modal}>
              <Image
                style={{ width: '100%', height: '90%' }}
                source={Background}
                resizeMode="contain"
              />
              <View style={QuestionAnswerStyles.modalInfoContainer}>
                <View style={QuestionAnswerStyles.modalStartQuizInfoLabelContainer}>
                  <Text style={QuestionAnswerStyles.quizCountText}>5</Text>
                  <Text style={{ fontSize: 16, color: COLORS.WHITE }}>Quiz No.</Text>
                </View>
                <View style={QuestionAnswerStyles.modalStartStatsInfoContainer}>
                  <View style={QuestionAnswerStyles.modalStartTimerContainer}>
                    <Text style={{ fontSize: 24, color: COLORS.MAGENTA_SHADE }}>10</Text>
                    <Text style={{ fontSize: 12 }}>Questions</Text>
                  </View>
                  <View style={QuestionAnswerStyles.modalStartTimerContainer}>
                    <Text style={{ fontSize: 24, color: COLORS.MAGENTA_SHADE }}>100 s</Text>
                    <Text style={{ fontSize: 12 }}>Time</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={Platform.select(QuestionAnswerStyles.modalCta)}
                onPress={() => this.handleStartActionClick()}
              >
                <Text style={QuestionAnswerStyles.startModalCtaText}>START</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      </ScrollView>

    );
  }
}

export default QuestionAnswer;
