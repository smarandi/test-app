import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { getAllStory } from '../../../services/Explore';
import COLORS from '../../../styles/Common/Colors';
import StoryStyles from '../../../styles/Explore/Stories';
import DemoImage from '../../../assets/img/home/stories/story-demo.png';
import DemoImage2 from '../../../assets/img/home/stories/demo-1.png';
import StoryPicker from './StoryPicker';
import { StoryActions } from './StoryActions';

const styles = StyleSheet.create(StoryStyles);

const title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const quote = 'Quisque condimentum auctor felis, ac cursus massa venenatis sit amet.';

const date = '2nd Nov 2017';

const data = [
  { key: 1, name: 'Sam' },
  { key: 2, name: 'John' },
  { key: 3, name: 'Mick' },
  { key: 4, name: 'Rory' },
  { key: 5, name: 'Joana' },
  { key: 6, name: 'Kevin' },
];


@connect(store => ({ auth: store.auth, story: store.story }))
class Stories extends Component {
  static navigationOptions = {
    header: null,
    headerMode: 'none',

  };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    story: PropTypes.object.isRequired,
  };

  state = {
    selectedIndex: 0,
  };

  componentDidMount() {
    const { token, id } = this.props.auth;
    // const { uuid } = this.props.navigation.state.params;

    console.log(this.props.navigation);
    const formData = new FormData();
    formData.append('course_uuid', '');

    getAllStory(token, id, formData)
      .then(data => this.props.dispatch(StoryActions.loadCourseInfo(data)));
  }

  selectThisItem = index => this.setState({ selectedIndex: index });

  renderItem = (item, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => this.selectThisItem(index)}
      style={{
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        source={DemoImage2}
        style={
          index === this.state.selectedIndex ?
            StoryStyles.storyPickerImageStyle :
            StoryStyles.storyPickerImageNotSelected
        }
        resizeMode="contain"
      />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  render() {
    console.log(this.props.story);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView horizontal style={{ flex: 2 }}>
          <View style={{
            borderColor: 'red', borderStyle: 'solid', borderWidth: 1, flexDirection: 'row', alignItems: 'center', paddingTop: '5%', paddingBottom: '5%',
            }}
          >
            {data.map((item, index) => this.renderItem(item, index))}
          </View>
        </ScrollView>
        <View style={{ flex: 3 }}>
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
        </View>
      </View>
    );
  }
}

export default Stories;
//
// <View>
//   <View style={styles.scrollablePicker}>
//     <View style={{ flex: 1 }}>
//       <StoryPicker />
//     </View>
//   </View>
//   <View style={styles.storyHeaderContainer}>
//     <View>
//       <Image
//         accessible
//         source={DemoImage}
//         style={styles.clickableImageStyle}
//         resizeMode="cover"
//       />
//     </View>
//   </View>
//   <View style={styles.quoteContainer}>
//     <Text style={styles.quoteText}>
//       {quote}
//     </Text>
//   </View>
//   <View style={styles.bottomViewContainer}>
//     <View style={styles.titleContainer}>
//       <Text style={styles.titleText}>
//         {title}
//       </Text>
//     </View>
//     <View style={styles.dateContainer}>
//       <Text style={styles.dateText}>
//         {date}
//       </Text>
//     </View>
//   </View>
//   <Text>
//     {quote}
//   </Text>
// </View>
// title: 'Stories',
// headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
// headerTitleStyle: { color: COLORS.WHITE, textAlign: 'left' },
