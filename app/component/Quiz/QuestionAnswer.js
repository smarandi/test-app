import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import Modal from 'react-native-modal';

import COLORS from '../../styles/Common/Colors';
import { INDEX_TO_ALPHABET } from '../../scripts/Quiz/Enums';
import QuestionAnswerStyles from '../../styles/Quiz/QuestionAnswer';

import Background from '../../assets/img/quiz/background.png';
import BadScore from '../../assets/img/quiz/bad-score.png';
import ExcellentScore from '../../assets/img/quiz/excellent-score.png';
import GoodScore from '../../assets/img/quiz/good-score.png';

import Questions from './SampleQuestions.json';
import Video from "../Home/Video/Video";

const question = {
  question_id: 'abc123',
  question_no: '1',
  question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
  options: ['Lorem', 'ipsum', 'dolor', 'sit'],
  answer: 'Lorem',
};

class QuestionAnswer extends Component {
  static navigationOptions = {
    title: 'Quizzes',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE },
  };

  state = {
    progress: 10,
    quizEnded: false,
  };

  decreaseTime = () => {
    if (this.state.progress !== 0) {
      this.setState({ progress: this.state.progress - 1 });
    }
  };

  getWidth = timerValue => (100 - ((10 - timerValue) * 10));

  evaluateAnswer = (correctAnswer, selectedAnswerIndex) => {
    if (correctAnswer === question.options[selectedAnswerIndex]) {

    }
    // If End of Questions,
    this.setState({ quizEnded: true });
  };

  renderOptions = (option, index) => (
    <TouchableOpacity
      key={index}
      style={QuestionAnswerStyles.singleOptionContainer}
      onPress={() => this.evaluateAnswer(question.answer, index)}
    >
      <Text style={QuestionAnswerStyles.optionText}>
        {INDEX_TO_ALPHABET[index]}. {option}
      </Text>
    </TouchableOpacity>
  );

  render() {
    setTimeout(() => this.decreaseTime(), 1000);
    return (
    // <ScrollView >
      <View style={QuestionAnswerStyles.mainContainer}>
        <View style={QuestionAnswerStyles.sliderAndTimerContainer}>
          <View style={QuestionAnswerStyles.timerContainer}>
            <Text style={QuestionAnswerStyles.timerText}>{this.state.progress} sec</Text>
          </View>
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
          <Text style={{ fontSize: 18 }}>
            {question.question_no}/10
          </Text>
        </View>
        <View style={{ flex: 4 }}>
          <View style={QuestionAnswerStyles.questionContainer}>
            <Text style={QuestionAnswerStyles.questionNumber}>
              {question.question_no}.
            </Text>
            <View style={QuestionAnswerStyles.questionTextContainer}>
              <Text style={QuestionAnswerStyles.questionText}>
                {question.question}
              </Text>
            </View>
          </View>
          <View style={QuestionAnswerStyles.optionsContainer}>
            {question.options.map((option, index) => this.renderOptions(option, index))}
          </View>
        </View>
        <Modal isVisible={this.state.quizEnded}>
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
              <TouchableOpacity style={Platform.select(QuestionAnswerStyles.modalCta)} onPress={() => this.setState({ quizEnded: false })}>
                <Text style={QuestionAnswerStyles.modalCtaText}>Analysis</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    // </ScrollView>
    );
  }
}

export default QuestionAnswer;

