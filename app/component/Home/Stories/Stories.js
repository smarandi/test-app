import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, View, Image, ScrollView, TouchableOpacity, Platform } from 'react-native';
import moment from 'moment';

import { getAllStory } from '../../../services/Explore';
import COLORS from '../../../styles/Common/Colors';
import StoryStyles from '../../../styles/Explore/Stories';
import { StoryActions } from './StoryActions';

@connect(store => ({ auth: store.auth, story: store.story }))
class Stories extends Component {
  static navigationOptions = {
    // header: null,
    // headerMode: 'none',
    title: 'Stories',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE },
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
    const { uuid } = this.props.navigation.state.params;

    const formData = new FormData();
    formData.append('course_uuid', uuid);

    getAllStory(token, id, formData)
      .then(data => this.props.dispatch(StoryActions.loadCourseInfo(data)));
  }

  selectThisItem = index => this.setState({ selectedIndex: index });

  renderItem = (item, index) => {
    const { image_link: image } = item;
    return (
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
          source={{ uri: image }}
          style={
            index === this.state.selectedIndex ?
              Platform.select(StoryStyles.storyPickerImageStyle) :
              StoryStyles.storyPickerImageNotSelected
          }
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  };

  render() {
    const { selectedIndex } = this.state;
    const { course } = this.props.navigation.state.params;

    return (this.props.story.data.length === 0 ?
      <Text>Loading...</Text> :
      <View style={{ flex: 1 }}>
        <ScrollView horizontal style={{ flex: 2 }}>
          <View style={StoryStyles.scrollListContainer}>
            {this.props.story.data.map((item, index) => this.renderItem(item, index))}
          </View>
        </ScrollView>
        <View style={{ flex: 3 }}>
          <View style={StoryStyles.storyHeaderContainer}>
            <View>
              <Image
                accessible
                source={{ uri: this.props.story.data[this.state.selectedIndex].image_link }}
                style={StoryStyles.clickableImageStyle}
                resizeMode="cover"
              />
            </View>
          </View>
          <View style={StoryStyles.quoteContainer}>
            <Text style={StoryStyles.quoteText}>
              {this.props.story.data[selectedIndex].story_details || null}
            </Text>
          </View>
          <View style={StoryStyles.bottomViewContainer}>
            <View style={StoryStyles.titleContainer}>
              <Text style={StoryStyles.titleText}>
                {this.props.story.data[selectedIndex].story_name}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={StoryStyles.touchableNav}
            onPress={() => this.props.navigation.navigate(
              'Detail',
              {
                header: 'Stories',
                course,
                url: this.props.story.data[this.state.selectedIndex].image_link,
                title: this.props.story.data[selectedIndex].story_name,
                details: this.props.story.data[selectedIndex].story_details,
                date: moment().format('DD-MM-YYYY'),
              },
              )}
          />
        </View>
      </View>
    );
  }
}

export default Stories;
