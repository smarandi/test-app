import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import COLORS from '../../styles/Common/Colors';
import Search from '../../assets/img/quiz/search.png';

import QuizAnalysisStyles from '../../styles/Quiz/QuizAnalysis';
import quizAnalysis from './SampleQuestionsResults.json';
import { ALPHABET_TO_INDEX } from '../../scripts/Quiz/Enums';

const { width } = Dimensions.get('window');

class QuizAnalysis extends Component {
  static navigationOptions = {
    title: 'Quiz Analysis',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE },
  };

  renderQuizItem = (item, index) => (
    <View key={index}>
      <View style={{ flexDirection: 'row', paddingBottom: '5%' }}>
        <Text style={{ fontSize: 18, fontWeight: '300' }}>{index + 1}. </Text>
        <Text style={{ fontSize: 18, fontWeight: '300' }}>{item.question}</Text>
      </View>
      <Text style={{
        fontSize: 16, fontWeight: '500', paddingLeft: '5%', paddingBottom: '5%',
      }}
      >
        Ans. {item.answerIndex} ({item.options[ALPHABET_TO_INDEX[item.answerIndex]]})
      </Text>
      {(
      item.answerIndex !== item.selectedAnswerIndex ?
        <Text
          style={{
            fontSize: 16,
            fontWeight: '300',
            paddingLeft: '5%',
            paddingBottom: '5%',
            color: COLORS.MAGENTA_SHADE,
          }}
        >
          Your Ans. {item.selectedAnswerIndex} ({item.options[ALPHABET_TO_INDEX[item.selectedAnswerIndex]]})
        </Text>
        : <Text />
      )}
    </View>
  );

  render() {
    return (
      <ScrollView>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={QuizAnalysisStyles.headerContainer} >
            <View >
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 24, color: COLORS.MAGENTA_SHADE }}>7</Text>
                <Text style={{ fontSize: 12, color: COLORS.WHITE }}>/10</Text>
              </View>
              <Text style={{ fontSize: 14, paddingTop: 5, color: COLORS.WHITE }}>Score</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{
                backgroundColor: COLORS.YELLOW_SHADE,
                width: 60,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                }}
              >
                <Text style={{ fontSize: 28, color: COLORS.WHITE, backgroundColor: 'transparent' }}>5</Text>
              </View>
              <Text style={{ fontSize: 16, paddingTop: 5, color: COLORS.WHITE }}>Quiz No</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 24, color: COLORS.MAGENTA_SHADE }}>100</Text>
                <Text style={{ fontSize: 12, color: COLORS.WHITE }}> sec</Text>
              </View>
              <Text style={{ fontSize: 14, paddingTop: 5, color: COLORS.WHITE }}>Time</Text>
            </View>
          </View>
        </View>
        <View style={{ padding: '10%' }}>
          {quizAnalysis.map((quizItem, index) => this.renderQuizItem(quizItem, index))}
        </View>
      </ScrollView>
    );
  }
}

export default QuizAnalysis;
