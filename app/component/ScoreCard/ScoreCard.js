import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
import { getScoreCard, getTotalTimeSpent } from '../../services/ScoreCard';
import { ScoreCardActions } from './ScoreCardActions';

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

@connect(store => ({ auth: store.auth, scoreCard: store.scoreCard }))
class ScoreCard extends Component {
  static navigationOptions = {
    title: 'Score Card',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE },
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    scoreCard: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { token, id } = this.props.auth;
    // const { uuid } = this.props.navigation.state.params;

    const formData = new FormData();
    formData.append('course_uuid', 'cede100d9c76');

    getScoreCard(token, id, formData)
      .then(data => this.props.dispatch(ScoreCardActions.loadCourseInfo(data)));

    getTotalTimeSpent(token, id, formData)
      .then(data => this.props.dispatch(ScoreCardActions.loadTotalTimeSpent(data)));
  }

  getScoreCardView = (data) => {
    const { blogs, quizData: quiz } = data;
    const {
      blog_read_count: totalRead,
      blog_total_count: totalBlog,
      read,
      total_time_spent: totalTime,
    } = blogs;
    const { played_quiz: played, total_quiz: total } = quiz;

    return (
      <ScrollView>
        <View style={{
          width: '100%',
          height: '200%',
        }}
        >
          <Header
            playedQuiz={played}
            totalQuiz={total}
            hourSpent={totalTime}
          />
          <Articles
            articlesRead={totalRead}
            totalArticles={totalBlog}
            totalTimeSpent={totalTime}
            articleList={read}
          />
          <CallToAction />
        </View>
      </ScrollView>
    );
  };

  render() {
    console.log('Scorecard', this.props.scoreCard.data);
    const { data } = this.props.scoreCard;

    return (
      Object.keys(data).length === 0 ?
        (<Text>Loading...</Text>)
        :
        this.getScoreCardView(data)
    );
  }
}

export default ScoreCard;
//
// <Articles {...articles} />
// <ProgressGraph />
// <TimeGraph />
// <CallToAction />
