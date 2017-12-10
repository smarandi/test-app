import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, DeckSwiper } from 'native-base';

import COLORS from '../../styles/Common/Colors';
import HomeStyles from '../../styles/Explore/Home';

import LOGO from '../../assets/img/home/graphics-design/logo-graphics-design.png';
import VIDEO_ICON from '../../assets/img/home/graphics-design/video.png';
import BLOG from '../../assets/img/home/graphics-design/blogs.png';
import STORIES from '../../assets/img/home/graphics-design/stories.png';
import PROJECTS from '../../assets/img/home/graphics-design/projects.png';

import { getAllCourse } from '../../services/Explore';
import { ExploreActions } from './ExploreActions';

const styles = StyleSheet.create(HomeStyles);

// const courses = ['Graphic Design', 'Architecture', 'Pilot', 'Doctor'];

@connect(store => ({ auth: store.auth, explore: store.explore }))
class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    explore: PropTypes.object.isRequired,
  };

  static navigationOptions = {
    title: 'Home',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE, alignSelf: 'flex-start' },
  };

  componentDidMount() {
    const { token, id } = this.props.auth;

    getAllCourse(token, id)
      .then(data => this.props.dispatch(ExploreActions.loadData(data)));
  }

  renderItem = (item) => {
    const { course_name: course, uuid } = item;
    return (
      <View style={styles.container}>
        <View style={styles.courseCard}>
          <View style={styles.columnLeft}>
            <View style={styles.courseLogoContainer}>
              <View style={styles.courseLogoIconContainer}>
                <Image
                  style={styles.courseIcon}
                  source={LOGO}
                  resizeMode="cover"
                />
              </View>
              <Text style={styles.label}>{course}</Text>
            </View>
            <View style={styles.courseVideoContainer}>
              <TouchableOpacity
                style={styles.videoIconContainer}
                onPress={() => this.props.navigation.navigate('Video', { uuid, plan: this.props.explore.plan })}
              >
                <Image
                  style={styles.videoIcon}
                  source={VIDEO_ICON}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.label}>Video</Text>
            </View>
            <View style={styles.seeJourney}>
              <TouchableOpacity
                style={styles.seeJourneyContainer}
                onPress={() => this.props.navigation.navigate('Journey', { uuid })}
              >
                <Text style={styles.seeJourneyLabel}>
                  See Journey
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.columnRight}>
            <View style={styles.courseActivity}>
              <TouchableOpacity
                style={styles.courseActivityIconContainer}
                onPress={() => this.props.navigation.navigate('Story', { uuid, plan: this.props.explore.plan })}
              >
                <Image
                  source={STORIES}
                  style={styles.courseActivityIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.label}>Stories</Text>
            </View>
            <View style={styles.courseActivity}>
              <TouchableOpacity
                style={styles.courseActivityIconContainer}
                onPress={() => this.props.navigation.navigate('Projects', { uuid })}
              >
                <Image
                  source={PROJECTS}
                  style={styles.courseActivityIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.label}>Projects</Text>
            </View>
            <View style={styles.courseActivity}>
              <TouchableOpacity
                style={styles.courseActivityIconContainer}
                onPress={() => this.props.navigation.navigate('Blog', { uuid })}
              >
                <Image
                  source={BLOG}
                  style={styles.courseActivityIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.label}>Blog</Text>
            </View>

          </View>
        </View>
      </View>);
  };

  render() {
    const { data } = this.props.explore;
    return (data.length > 0 ?
      (
        <View style={{ flex: 1 }}>
          <Container>
            <DeckSwiper
              dataSource={data}
              renderItem={this.renderItem}
            />
          </Container>
        </View>
      )
      :
        <Text>Loading</Text>);
  }
}

export default Home;
