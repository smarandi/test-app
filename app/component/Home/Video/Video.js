import React, { Component } from 'react';
import { Text, View, StyleSheet, WebView } from 'react-native';
import YouTube from 'react-native-youtube';

import VideoStyles from '../../../styles/Explore/Video';

const styles = StyleSheet.create(VideoStyles);

/* TODO: Add api key for android */
class Video extends Component {
  static navigationOptions = {
    title: 'Video',
  };

  render() {
    return (
      <View>
        <View>
          <YouTube
            videoId="z0M7_HPSi14"
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
            <Text style={styles.videoLabel}>Lorem ipsum dolor sit amet</Text>
          </View>
          <View>
            <Text style={styles.videoLabel}>2:05 min</Text>
          </View>
        </View>
        <View style={{ padding: 10, flex: 1 }}>
          <Text style={styles.videoDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas risus ligula, scelerisque quis magna a, rutrum tincidunt purus.
            Suspendisse potenti. Curabitur euismod ex in commodo vulputate.
            Nunc dapibus in quam eget elementum.
            Donec pulvinar eros commodo turpis eleifend porttitor.
          </Text>
        </View>
      </View>
    );
  }
}

export default Video;
