import React, { Component } from 'react';
import { Text, View } from 'react-native';

import QuizMenuStyles from '../../styles/Quiz/QuizMenuBackground';
import COLORS from '../../styles/Common/Colors';

class QuizMenu extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <View style={QuizMenuStyles.menuItemsContainer}>
        <View style={QuizMenuStyles.rowTop}>
          <View style={{ ...QuizMenuStyles.column, backgroundColor: COLORS.GREEN_SHADE }} />
          <View style={{ ...QuizMenuStyles.column, backgroundColor: COLORS.GREY }} />
          <View style={{ ...QuizMenuStyles.column, backgroundColor: COLORS.GREY }} />
          <View style={{ ...QuizMenuStyles.column, backgroundColor: COLORS.GREY }} />
        </View>
        <View style={QuizMenuStyles.rowMiddle}>
          <View style={{ ...QuizMenuStyles.column, backgroundColor: COLORS.GREY }} />
          <View style={{ ...QuizMenuStyles.column, backgroundColor: COLORS.GREY }} />
          <View style={{ ...QuizMenuStyles.column, backgroundColor: COLORS.GREY }} />
        </View>
        <View style={QuizMenuStyles.rowBottom}>
          <View style={{ ...QuizMenuStyles.column, backgroundColor: COLORS.GREY }} />
          <View style={{ ...QuizMenuStyles.column, backgroundColor: COLORS.GREY }} />
          <View style={{ ...QuizMenuStyles.column, backgroundColor: COLORS.GREY }} />
          <View style={{ ...QuizMenuStyles.column, backgroundColor: COLORS.GREY }} />
        </View>
      </View>
    );
  }
}

export default QuizMenu;
