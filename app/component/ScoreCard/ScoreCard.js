import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

import COLORS from '../../styles/Common/Colors';
import Header from './Header';
import Articles from './Articles';
import TimeGraph from './TimeGraph';
import ProgressGraph from './ProgressGraph';
import CallToAction from './CallToAction';

import Pilot from '../../assets/img/score-card/pilot.png';
import Architecture from '../../assets/img/score-card/architecture.png';
import Design from '../../assets/img/score-card/design.png';


const articles = {
  articlesRead: 3,
  totalArticles: 12,
  totalTimeSpent: 28,
  articleList: [
    {
      icon: Pilot,
      title: 'Basic Color Harmonies Used in Design',
      type: 'Knowledge Blog',
      estimatedReadTime: 9,
      date: '22nd Oct 2017',
    },
    {
      icon: Architecture,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      type: 'Practice Blog',
      estimatedReadTime: 7,
      date: '21nd Oct 2017',
    },
    {
      icon: Design,
      title: 'Duis tempus pretium pellentesque.',
      type: 'Color Blog',
      estimatedReadTime: 5,
      date: '23nd Oct 2017',
    },
  ],
};

class ScoreCard extends Component {
  static navigationOptions = {
    title: 'Score Card',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE },
  };

  render() {
    return (
      <View>
        <Header />
        <ScrollView>
          <Articles {...articles} />
          <ProgressGraph />
          <TimeGraph />
          <CallToAction />
        </ScrollView>
      </View>
    );
  }
}

export default ScoreCard;
