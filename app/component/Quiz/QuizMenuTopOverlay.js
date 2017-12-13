import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, Platform } from 'react-native';

import QuizMenuStyles from '../../styles/Quiz/QuizMenuTopOverlay';
import COLORS from '../../styles/Common/Colors';

class QuizMenuTopOverlay extends Component {
  componentDidMount() {
  }

  static propTypes = {
    touchableActionHandler: PropTypes.func.isRequired,
    quizList: PropTypes.array.isRequired,
  };

  render() {
    const { quizList } = this.props;
    if (quizList.length !== 0) {
      const [first, second, third, fourth, fifth, sixth, seventh, eight, ninth, tenth] = this.props.quizList;
      return (
        <View style={QuizMenuStyles.menuItemsContainer}>
          <View style={QuizMenuStyles.rowTop}>
            <View style={QuizMenuStyles.cell1} >
              <View style={Platform.select(QuizMenuStyles.touchableStyle)}>
                <Text style={{ color: COLORS.WHITE }}>7</Text>
              </View>
            </View>
            <View style={QuizMenuStyles.column} >
              <TouchableOpacity
                style={QuizMenuStyles.touchable}
                onPress={() => this.props.touchableActionHandler(second)}
              />
            </View>
            <View style={QuizMenuStyles.column} />
            <View style={QuizMenuStyles.column} />
          </View>
          <View style={QuizMenuStyles.rowMiddle}>
            <View style={QuizMenuStyles.column} />
            <View style={QuizMenuStyles.column} />
            <View style={QuizMenuStyles.column} />
          </View>
          <View style={QuizMenuStyles.rowBottom}>
            <View style={QuizMenuStyles.column} />
            <View style={QuizMenuStyles.column} />
            <View style={QuizMenuStyles.column} />
            <View style={QuizMenuStyles.column} />
          </View>
        </View>
      );
    }
    return null;
  }
}

export default QuizMenuTopOverlay;
