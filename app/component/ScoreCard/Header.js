import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, Dimensions } from 'react-native';

import ScorecardStyles from '../../styles/ScoreCard/Header';
import HeaderBackground from '../../assets/img/score-card/header.png';
import CourseLogo from '../../assets/img/score-card/course-logo.png';

class Header extends Component {
  static propTypes = {
    playedQuiz: PropTypes.number.isRequired,
    totalQuiz: PropTypes.number.isRequired,
    hourSpent: PropTypes.number.isRequired,
  };

  render() {
    const { playedQuiz, totalQuiz, hourSpent } = this.props;

    return (
      <View>
        <View style={ScorecardStyles.sectionHeader}>
          <View style={ScorecardStyles.backgroundImageContainer}>
            <Image
              style={{ width: Dimensions.get('window').width, height: 200 }}
              source={HeaderBackground}
              resizeMode="cover"
            />
          </View>
          <View style={ScorecardStyles.quizPlayedSection}>
            <View style={ScorecardStyles.quizPlayedSectionOneContainer}>
              <Text style={ScorecardStyles.quizPlayedNumeric}>{playedQuiz} </Text>
              <Text style={ScorecardStyles.quizPlayedUnit}> /{totalQuiz}</Text>
            </View>
            <View>
              <Text style={ScorecardStyles.quizPlayedLabel}>Quizzes Played</Text>
            </View>
          </View>
          <View style={ScorecardStyles.logoSection}>
            <View>
              <Image
                style={ScorecardStyles.backgroundImage}
                source={CourseLogo}
                resizeMode="contain"
              />
            </View>
            <View>
              <Text style={ScorecardStyles.logoText}>Graphic Design</Text>
            </View>
          </View>
          <View style={ScorecardStyles.hoursSpentSection}>
            <View style={ScorecardStyles.hoursSpentSectionOneContainer}>
              <Text style={ScorecardStyles.hoursSpentNumeric}>{hourSpent} </Text>
              <Text style={ScorecardStyles.hoursSpentUnit}>hrs</Text>
            </View>
            <View>
              <Text style={ScorecardStyles.hourSpentLabel}>Total Time Spent</Text>
            </View>
          </View>
        </View>
        <View />
        <View />
        <View />
        <View />
      </View>
    );
  }
}

export default Header;
