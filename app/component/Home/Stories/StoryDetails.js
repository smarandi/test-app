import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

import COLORS from '../../../styles/Common/Colors';
import StoryStyles from '../../../styles/Explore/StoryDetails';
import DemoImage from '../../../assets/img/home/stories/story-demo-2.png';

const title = 'What really matters in the world of design';
const date = '2nd Nov 2017';
const story = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique tortor sit amet nunc lobortis, ' +
  'facilisis accumsan turpis suscipit. Curabitur id eleifend ipsum. Aenean et tortor sollicitudin, ' +
  'dignissim odio quis, lobortis nisi. Praesent nec auctor turpis. Donec ac tincidunt est. Integer suscipit ' +
  'luctus luctus. Vestibulum eleifend purus id ipsum rutrum interdum. Duis porta mauris ipsum, vehicula rutrum ' +
  'urna placerat ut. Etiam a odio elit. Cras scelerisque auctor massa, et rutrum mi pretium id. ' +
  'Aenean sit amet nibh pretium, lobortis nisl ac, tristique mi. Nullam blandit cursus felis a elementum. ' +
  'Vestibulum eget mollis eros, et accumsan tellus. Pellentesque habitant morbi tristique senectus et netus et' +
  ' malesuada fames ac turpis egestas. Suspendisse viverra magna justo, convallis porttitor erat auctor vitae.' +
  'Nulla bibendum consectetur nisi, congue varius leo ultrices vel. Vestibulum consectetur facilisis erat ' +
  'vitae efficitur. Morbi nec sollicitudin ante. Donec purus lorem, tempor in vehicula vel, viverra at nisi. ' +
  'Etiam tincidunt sem lectus, in rutrum augue dignissim ornare. Class aptent taciti sociosqu ad litora ' +
  'torquent per conubia nostra, per inceptos himenaeos. Phasellus elementum suscipit est luctus ultricies. ' +
  'Curabitur facilisis ante eget erat convallis, sed suscipit lacus laoreet. Praesent sollicitudin viverra ' +
  'orci id porta. Vivamus malesuada lacinia faucibus. Duis lacinia fermentum fermentum. Sed in varius magna. ' +
  'Fusce pharetra elementum est sit amet bibendum. Etiam lectus tortor, vulputate ut fermentum at, pharetra at ' +
  'ex. Donec vehicula elit scelerisque lorem scelerisque, ac auctor lacus tincidunt. Fusce fringilla ' +
  'suscipit orci eu pharetra. Donec vestibulum massa hendrerit varius tempor.';

const styles = StyleSheet.create(StoryStyles);

class StoryDetails extends Component {
  static navigationOptions = {
    header: null,
    headerMode: 'none',
    // title: 'Stories',
    // headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    // headerTitleStyle: { color: COLORS.WHITE },
  };
  render() {
    return (
      <View>
        <View style={styles.imageView}>
          <View>
            <Image
              accessible
              source={DemoImage}
              style={styles.clickableImageStyle}
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={styles.textView}>
          <View style={styles.titleAndDateContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>{date}</Text>
            </View>
          </View>
          <View style={styles.storyContainer}>
            <ScrollView>
              <Text style={styles.story}>{story}</Text>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

export default StoryDetails;
