import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';

import ScorecardStyles from '../../styles/ScoreCard/Header';
import HeaderBackground from '../../assets/img/score-card/header.png';
import CourseLogo from '../../assets/img/score-card/course-logo.png';

class Header extends Component {
  componentDidMount() {
  }

  render() {
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
              <Text style={ScorecardStyles.quizPlayedNumeric}>5 </Text>
              <Text style={ScorecardStyles.quizPlayedUnit}> /10</Text>
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
              <Text style={ScorecardStyles.hoursSpentNumeric}>1.5 </Text>
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
