import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import StoryPickerStyles from '../../../styles/Explore/Stories';
import DemoImage from '../../../assets/img/home/stories/demo-1.png';

const data = [
  { key: 1, name: 'Sam' },
  { key: 2, name: 'John' },
  { key: 3, name: 'Mick' },
  { key: 4, name: 'Rory' },
  { key: 5, name: 'Joana' },
  { key: 6, name: 'Kevin' },
];

class StoryPicker extends Component {
  state = {
    selectedIndex: 0,
  };

  selectThisItem = index => this.setState({ selectedIndex: index });

  renderItem = (item, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => this.selectThisItem(index)}
      style={{ paddingLeft: 10, paddingRight: 10, alignItems: 'center', justifyContent: 'center' }}
    >
      <Image
        source={DemoImage}
        style={
          index === this.state.selectedIndex ?
            StoryPickerStyles.storyPickerImageStyle :
            StoryPickerStyles.storyPickerImageNotSelected
        }
        resizeMode="contain"
      />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {data.map((item, index) => this.renderItem(item, index))}
        </View>
    );
  }
}

export default StoryPicker;
//
// <ScrollView horizontal>
// </ScrollView>

//
//
// <TouchableOpacity>
//   <Image
//     source={DemoImage}
//     style={StoryPickerStyles.storyPickerImageNotSelected}
//     resizeMode="contain"
//   />
// </TouchableOpacity>
// <TouchableOpacity>
// <Image
// source={DemoImage}
// style={StoryPickerStyles.storyPickerImageNotSelected}
// resizeMode="contain"
//   />
//   </TouchableOpacity>
// <TouchableOpacity>
//   <Image
//     source={DemoImage}
//     style={StoryPickerStyles.storyPickerImageNotSelected}
//     resizeMode="contain"
//   />
// </TouchableOpacity>
// <TouchableOpacity>
// <Image
// source={DemoImage}
// style={StoryPickerStyles.storyPickerImageStyle}
// resizeMode="contain"
//   />
//   </TouchableOpacity>
// <TouchableOpacity>
//   <Image
//     source={DemoImage}
//     style={StoryPickerStyles.storyPickerImageNotSelected}
//     resizeMode="contain"
//   />
// </TouchableOpacity>
