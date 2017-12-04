import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import DEMO_IMAGE from '../../../assets/img/home/projects/graphics-design.png';

import ProjectStyles from '../../../styles/Explore/Projects';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create(ProjectStyles);

const entries = [2, 3, 4, 5, 6, 7];

const title = 'Outside Material: The Cover Art';

const date = '2nd Nov 2017';

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
  'Vivamus tristique tortor sit amet nunc lobortis, facilisis accumsan turpis suscipit. ' +
  'Curabitur id eleifend ipsum.';


class Projects extends Component {
  static navigationOptions = {
    title: 'Projects',
  };

  renderItem = ({ item, index }) => (
    <View
      index={index}
      style={{
        width, height: '100%', justifyContent: 'center', alignItems: 'center'
      }}
    >
      <View style={styles.sliderItem}>
        <View style={styles.sliderImageContainer}>
          <Image
            style={styles.sliderImage}
            source={DEMO_IMAGE}
            resizeMode="cover"
          />
        </View>
        <View style={styles.sliderTextContentContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>{date}</Text>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{description}</Text>
          </View>
          <TouchableOpacity style={styles.readMoreContainer}>
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <View>
        <View style={styles.carouselContainer} />
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={entries}
          renderItem={this.renderItem}
          sliderWidth={width}
          itemWidth={width}
        />
      </View>
    );
  }
}

export default Projects;
