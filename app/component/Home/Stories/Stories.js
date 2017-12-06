import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import COLORS from '../../../styles/Common/Colors';
import StoryStyles from '../../../styles/Explore/Stories';
import DemoImage from '../../../assets/img/home/stories/story-demo.png';
import StoryPicker from './StoryPicker';

const styles = StyleSheet.create(StoryStyles);

const title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const quote = 'Quisque condimentum auctor felis, ac cursus massa venenatis sit amet.';

const date = '2nd Nov 2017';

const data = [
  { key: 1 },
  { key: 2 },
  { key: 3 },
  { key: 4 },
  { key: 5 },
  { key: 6 },
];

class Stories extends Component {
  static navigationOptions = {
    header: null,
    headerMode: 'none',
    // title: 'Stories',
    // headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    // headerTitleStyle: { color: COLORS.WHITE, textAlign: 'left' },
  };

  renderItem = (item, index) => (<Text key={index}>Hello Clickable Stuff</Text>);

  render() {
    return (
      <View>
        <View style={styles.scrollablePicker}>
          <View style={{ flex: 1 }}>
            <StoryPicker />
          </View>
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
//
// <ScrollView
//   style={{
//     height: 100,
//     width: 300,
//     borderColor: 'green',
//     borderWidth: 1,
//     borderStyle: 'solid',
//   }}
// >
//   <FlatList
//     horizontal
//     style={{ height: 400 }}
//     data={data}
//     renderItem={this.renderItem}
//   />
// </ScrollView>
