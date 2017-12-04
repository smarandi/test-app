/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';

import COLORS from '../../styles/Common/Colors';
import PolicyStyles from '../../styles/More/Policy';

const policy = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
  'Cras malesuada eget tellus eu rhoncus. Mauris id congue massa. ' +
  'Nullam volutpat nunc sed ornare vestibulum. ' +
  'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
  'Aenean vulputate vitae tortor nec fringilla. ' +
  'Suspendisse vitae consectetur ipsum, vel molestie ipsum. Maecenas sed sem mi. ' +
  'Suspendisse eu semper dui. Suspendisse consequat molestie sodales. Nulla tempus malesuada orci ac dictum. ' +
  'Nulla semper ipsum bibendum, suscipit lorem nec, faucibus purus.',
];

class Policy extends Component {
  static navigationOptions = {
    title: 'Policy',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE },
  };

  render() {
    return (
      <ScrollView style={PolicyStyles.container} >
        <Text style={PolicyStyles.title}>Privacy Policy</Text>
        {
          policy.map((paragraph, index) =>
            <Text key={index} style={PolicyStyles.paragraph}>{paragraph}</Text>)
        }
      </ScrollView>
    );
  }
}

export default Policy;
