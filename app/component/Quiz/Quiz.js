import React, { Component } from 'react';
import { Text, View, Dimensions, Platform, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Button, Icon, Fab } from 'native-base';
import Carousel from 'react-native-snap-carousel';
import Modal from 'react-native-modal';

import COLORS from '../../styles/Common/Colors';
import CourseLogo from '../../assets/img/quiz/course-logo.png';
import QuizMenuBackground from '../../assets/img/quiz/quiz-background-1.png';

import QuizStyles from '../../styles/Quiz/Quiz';

const { width } = Dimensions.get('window');

const entries = [2, 3, 4, 5, 6, 7];


class Quiz extends Component {
  static navigationOptions = {
    title: 'Quizzes',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE },
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  state = {
    isModalVisible: false,
    fabActive: false,
  };

  showModal = () => this.setState({ isModalVisible: true });

  hideModal = () => this.setState({ isModalVisible: false });

  handleFabClick = () =>
    this.setState({ fabActive: !this.state.fabActive, isModalVisible: true });

  renderItem = ({ item, index }) => (
    <View style={{
      width,
      height: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: COLORS.WHITE,
    }}
    >
      <View style={QuizStyles.sliderItem}>
        <View style={QuizStyles.sliderItemHeader}>
          <View style={QuizStyles.scoreContainer}>
            <Text style={QuizStyles.highlightedText}>7</Text>
            <Text style={QuizStyles.infoText}>Average Score</Text>
          </View>
          <View style={QuizStyles.courseLogoContainer}>
            <Image
              source={CourseLogo}
              style={QuizStyles.logo}
            />
            <Text style={QuizStyles.courseTitle}>Graphic Design</Text>
          </View>
          <View style={QuizStyles.scoreContainer}>
            <View style={QuizStyles.highlightedQuizIndexContainer}>
              <Text style={QuizStyles.highlightedText}>4</Text>
              <Text style={QuizStyles.quizCountText}> /10</Text>
            </View>
            <Text style={QuizStyles.infoText}>Quizzes Played</Text>
          </View>
        </View>
        <View style={QuizStyles.menuContainer}>
          <Image
            source={QuizMenuBackground}
            style={QuizStyles.backgroundImage}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={Platform.select(QuizStyles.touchableStyle)}
            onPress={() => this.props.navigation.navigate('QuestionAnswer')}
          />
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <View style={{ backgroundColor: COLORS.WHITE }}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={entries}
          renderItem={this.renderItem}
          sliderWidth={width}
          itemWidth={width}
        />
      </View>
    );
  }
}

export default Quiz;

//
// <Carousel
//   ref={(c) => { this._carousel = c; }}
//   data={entries}
//   renderItem={this.renderItem}
//   sliderWidth={width}
//   itemWidth={itemWidth}
// />
//
// renderItem = ({ item, index }) => (
//   <View
//     index={index}
//     style={{
//       width: itemWidth,
//       paddingHorizontal: horizontalMargin,
//       height: '100%',
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderStyle: 'solid',
//       borderColor: 'red',
//       borderWidth: 1,
//     }}
//   >
//     <View style={{ styles.sliderItem}}>
//       <View style={styles.sliderImageContainer}>
//         <Image
//           style={styles.sliderImage}
//           source={DEMO_IMAGE}
//           resizeMode="cover"
//         />
//       </View>
//       <View style={styles.sliderTextContentContainer}>
//         <View style={styles.headerContainer}>
//           <View style={styles.titleContainer}>
//             <Text style={styles.title}>{title}</Text>
//           </View>
//           <View style={styles.dateContainer}>
//             <Text style={styles.date}>{date}</Text>
//           </View>
//         </View>
//         <View style={styles.descriptionContainer}>
//           <Text style={styles.description}>{description}</Text>
//         </View>
//         <TouchableOpacity style={styles.readMoreContainer}>
//           <Text style={styles.readMoreText}>Read More</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   </View>
// );
//
// <View style={{ flex: 1 }}>
//   <TouchableOpacity onPress={this.showModal}>
//     <Text>Show Modal</Text>
//   </TouchableOpacity>
//   <Modal isVisible={this.state.isModalVisible}>
//     <View style={{ flex: 1 }}>
//       <Text>Hello!</Text>
//       <TouchableOpacity onPress={this.hideModal}>
//         <Text>Hide Modal</Text>
//       </TouchableOpacity>
//     </View>
//   </Modal>
// </View>
//
// <Icon name="search" />
// <Button style={{ backgroundColor: '#34A34F' }}>
// <Icon name="logo-whatsapp" />
//   </Button>
// <Button style={{ backgroundColor: '#3B5998' }}>
//   <Icon name="logo-facebook" />
// </Button>
// <Button disabled style={{ backgroundColor: '#DD5144' }}>
// <Icon name="mail" />
//   </Button>
//
// <Fab
//   active={this.state.fabActive}
//   direction="up"
//   style={{ backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY }}
//   position="bottomRight"
//   onPress={() => this.handleFabClick()}
// >
//   <Icon name="search" />
// </Fab>
// <Modal isVisible={this.state.isModalVisible}>
// <View style={{ flex: 1 }}>
// <Text>Hello!</Text>
// <TouchableOpacity onPress={this.hideModal}>
//   <Text>Hide Modal</Text>
//   </TouchableOpacity>
// </View>
// </Modal>
