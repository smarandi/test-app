/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import COLORS from '../../styles/Common/Colors';

import CallToActionStyles from '../../styles/ScoreCard/CallToAction';

const { width } = Dimensions.get('window');

const entries = [2, 3, 4];

class Projects extends Component {
  static navigationOptions = {
    title: 'Projects',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE },
  };

  renderItem = ({ item, index }) => (
    <View
      index={index}
      style={{
        width, justifyContent: 'center', alignItems: 'center',
      }}
    >
      <View style={CallToActionStyles.itemContainer}>
        <Text style={CallToActionStyles.ctaActionText}>Read the article</Text>
        <Text style={CallToActionStyles.ctaContentText}>"Introduction to Color Theory" to get more insigts on visual design</Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={CallToActionStyles.parentView}>
        <View style={CallToActionStyles.carouselContainer}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={entries}
            renderItem={this.renderItem}
            sliderWidth={width}
            itemWidth={width}
          />
        </View>
      </View>
    );
  }
}

export default Projects;
