import React, { Component } from 'react';
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


const styles = StyleSheet.create(HomeStyles);

const courses = ['Graphic Design', 'Architecture', 'Pilot', 'Doctor'];

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  static navigationOptions = {
    title: 'Home',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE, alignSelf: 'flex-start' },
  };

  renderItem = item => (
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
            <Text style={styles.label}>{item}</Text>
          </View>
          <View style={styles.courseVideoContainer}>
            <TouchableOpacity
              style={styles.videoIconContainer}
              onPress={() => this.props.navigation.navigate('Video')}
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
              onPress={() => this.props.navigation.navigate('Journey')}
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
              onPress={() => this.props.navigation.navigate('Story')}
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
              onPress={() => this.props.navigation.navigate('Projects')}
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
              onPress={() => this.props.navigation.navigate('Blog')}
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
    </View>
  );

  render() {
    return (

      <View style={{ flex: 1 }}>
        <Container>
          <DeckSwiper
            dataSource={courses}
            renderItem={this.renderItem}
          />
        </Container>
      </View>

    );
  }
}

export default Home;
