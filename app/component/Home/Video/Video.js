import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import YouTube from 'react-native-youtube';

import COLORS from '../../../styles/Common/Colors';
import VideoStyles from '../../../styles/Explore/Video';
import { getCourse } from '../../../services/Explore';
import { VideoActions } from './VideoActions';

const styles = StyleSheet.create(VideoStyles);

const REPLACEABLE_YOUTUBE_LINK_PART = 'https://www.youtube.com/watch?v=';

/**
 * TODO: handle Video length info in frontend
 * TODO: Add api key for android */
@connect(store => ({ auth: store.auth, video: store.video }))
class Video extends Component {
  static navigationOptions = {
    title: 'Video',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE },
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    video: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { token, id } = this.props.auth;
    const { uuid } = this.props.navigation.state.params;

    const formData = new FormData();
    formData.append('uuid', uuid);

    getCourse(token, id, formData)
      .then(data => this.props.dispatch(VideoActions.loadCourseInfo(data)));
  }

  getView = (course) => {
    const { course_details: details, course_name: title, video_link: link } = course;
    const videoId = link.replace(REPLACEABLE_YOUTUBE_LINK_PART, '');
    return (
      <View>
        <View>
          <YouTube
            videoId={videoId}
            style={{ alignSelf: 'stretch', height: 300 }}
          />
        </View>
        <View style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
      }}
        >
          <View>
            <Text style={styles.videoLabel}>{title}</Text>
          </View>
          <View>
            <Text style={styles.videoLabel}>2:05 min</Text>
          </View>
        </View>
        <View style={{ padding: 10, flex: 1 }}>
          <Text style={styles.videoDescription}>{details}</Text>
        </View>
      </View>
    );
  };

  render() {
    const { course } = this.props.video;
    return (Object.keys(course).length > 0 ? this.getView(course) : (<Text>Loading...</Text>));
  }
}

export default Video;
