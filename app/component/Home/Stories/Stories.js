import React, { Component } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

import StoryStyles from '../../../styles/Explore/Stories';
import DemoImage from '../../../assets/img/home/stories/story-demo.png';

const styles = StyleSheet.create(StoryStyles);

const title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const quote = 'Quisque condimentum auctor felis, ac cursus massa venenatis sit amet.';

const date = '2nd Nov 2017';

class Stories extends Component {
  static navigationOptions = {
    title: 'Stories',
  };

  render() {
    return (
      <View>
        <View style={styles.scrollablePicker}>
          <Text>
            Scrollable List
          </Text>
        </View>
        <View style={styles.storyHeaderContainer}>
          <View>
            <Image
              accessible
              source={DemoImage}
              style={styles.clickableImageStyle}
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>
            {quote}
          </Text>
        </View>
        <View style={styles.bottomViewContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              {title}
            </Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>
              {date}
            </Text>
          </View>
        </View>
        <Text>
          {quote}
        </Text>
      </View>
    );
  }
}

export default Stories;
//
// <Text>
//   Story Picker
//
// </Text>
// <FlatList
// horizontal
// data={[{ key: 'a' }, { key: 'b' }]}
// renderItem={({ item }) => <Text>{item.key}</Text>}
// />
//
// <View style={{ position: 'absolute', flex: 1 }}>
//   <Text>
//     {quote}
//   </Text>
//   <Text>
//     {title}
//   </Text>
//   <Text>
//     {date}
//   </Text>
// </View>

