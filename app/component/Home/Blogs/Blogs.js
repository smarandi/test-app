import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Image, Icon } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import COLORS from '../../../styles/Common/Colors';
import DEMO_IMAGE from '../../../assets/img/home/blogs/color-graph.png';
import DEMO_IMAGE_2 from '../../../assets/img/home/blogs/type.png';

import BlogStyles from '../../../styles/Explore/Blog';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create(BlogStyles);

const entries = [2, 3, 4, 5, 6, 7];


const date = '2nd Nov 2017';

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
  'Vivamus tristique tortor sit amet nunc lobortis, facilisis accumsan turpis suscipit. ' +
  'Curabitur id eleifend ipsum.';


class Blogs extends Component {
  static navigationOptions = {
    title: 'Blogs',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE },
  };

  renderItem = ({ item, index }) => (
    <View
      index={index}
      style={{
        width,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
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
      </View>
    </View>
  );

  render() {
    return (
      <View>
        <View style={styles.carouselContainer}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={entries}
            renderItem={this.renderItem}
            sliderWidth={width}
            itemWidth={width}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.chapter}>Chapter 4/10</Text>
          <Text style={styles.title}>Basic Color Harmonies Used in Design</Text>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ width: 150, height: 150 }}
              source={DEMO_IMAGE_2}
              resizeMode="contain"
            />
            <Text style={styles.chapter}>Read</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Blogs;
//
<View style={{}}>
  <Image
    style={{}}
    source={DEMO_IMAGE}
    resizeMode="cover"
  />
  <Text style={styles.chapter}>Read</Text>
</View>

//
// <View style={styles.sliderTextContentContainer}>
//   <View style={styles.headerContainer}>
//     <View style={styles.titleContainer}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//     <View style={styles.dateContainer}>
//       <Text style={styles.date}>{date}</Text>
//     </View>
//   </View>
//   <View style={styles.descriptionContainer}>
//     <Text style={styles.description}>{description}</Text>
//   </View>
//   <TouchableOpacity style={styles.readMoreContainer}>
//     <Text style={styles.readMoreText}>Read More</Text>
//   </TouchableOpacity>
// </View>
