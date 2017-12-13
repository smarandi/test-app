import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, View, Dimensions, Image } from 'react-native';
// import { Button, Icon, Fab } from 'native-base';
import Carousel from 'react-native-snap-carousel';

import { getQuizStatus } from '../../services/Quiz';
import COLORS from '../../styles/Common/Colors';
import CourseLogo from '../../assets/img/quiz/course-logo.png';
import QuizMenuBackground from '../../assets/img/quiz/quiz-background-1.png';

import QuizStyles from '../../styles/Quiz/Quiz';
import { QuizActions } from './QuizActions';
import QuizMenuBackgroundLayout from './QuizMenuBackground';
import QuizMenuTopOverlay from './QuizMenuTopOverlay';

const { width } = Dimensions.get('window');

@connect(store => ({ auth: store.auth, quiz: store.quiz, explore: store.explore }))
class Quiz extends Component {
  static navigationOptions = {
    title: 'Quizzes',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE },
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    quiz: PropTypes.object.isRequired,
    explore: PropTypes.object.isRequired,
  };


  componentDidMount() {
    const { token, id } = this.props.auth;
    // const { uuid } = this.props.navigation.state.params;

    const formData = new FormData();
    formData.append('course_uuid', 'cede100d9c76');

    getQuizStatus(token, id, formData)
      .then(data => this.props.dispatch(QuizActions.loadCourseInfo(data)));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && (this.props.quiz.currentIndex !== nextProps.quiz.currentIndex)) {
      const { token, id } = this.props.auth;
      const { data: courses } = this.props.explore;
      const { currentIndex } = nextProps.quiz;
      const course_uuid = courses[currentIndex].uuid;
      const formData = new FormData();
      // formData.append('course_uuid', course_uuid);
      formData.append('course_uuid', 'cede100d9c76');


      getQuizStatus(token, id, formData)
        .then(data => this.props.dispatch(QuizActions.loadCourseInfo(data)));
    }
  }

  startQuiz = (quizIndex) => {
    const { token, id } = this.props.auth;
    const { data: courses } = this.props.explore;
    const { currentIndex, quizObject } = this.props.quiz;
    const courseUUID = courses[currentIndex].uuid;
    const formData = new FormData();
    // formData.append('course_uuid', courseUUID);
    formData.append('course_uuid', 'cede100d9c76'); // Remove hardcoded stuff
    formData.append('uuid', quizIndex.uuid);

    getQuizStatus(token, id, formData)
      .then((data) => {
        this.props.dispatch(QuizActions.loadQuizQuestions(data));
        this.props.navigation.navigate('QuestionAnswer', { courseId: 'cede100d9c76' }); // Remove hardcoded
      })
      .catch(() => { /* Handle Catch */ });
  };

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
            <Text style={QuizStyles.courseTitle}>{item.course_name.slice(0, 20)}</Text>
          </View>
          <View style={QuizStyles.countContainer}>
            <View style={QuizStyles.highlightedQuizIndexContainer}>
              <Text style={QuizStyles.highlightedText}>4</Text>
              <Text style={QuizStyles.quizCountText}> /10</Text>
            </View>
            <Text style={QuizStyles.infoText}>Quizzes Played</Text>
          </View>
        </View>
        <View style={QuizStyles.menuContainer}>
          <QuizMenuBackgroundLayout />
          <Image
            source={QuizMenuBackground}
            style={QuizStyles.backgroundImage}
            resizeMode="cover"
          />
          <QuizMenuTopOverlay
            touchableActionHandler={this.startQuiz}
            quizList={this.props.quiz.data}
          />
        </View>
      </View>
    </View>
  );

  handleScroll = () => {
    if (this.props.quiz.currentIndex !== this.carousel.currentIndex) {
      this.props.dispatch(QuizActions.updateCurrentIndex(this.carousel.currentIndex));
    }
  };

  render() {
    const { data: courses } = this.props.explore;
    const { data: quizData } = this.props.quiz;

    return (courses.length === 0 ?
      (<Text>Loading...</Text>) :
      (
        <View style={{ backgroundColor: COLORS.WHITE }}>
          <Carousel
            ref={(c) => { this.carousel = c; }}
            data={courses}
            renderItem={this.renderItem}
            sliderWidth={width}
            itemWidth={width}
            onScroll={() => this.handleScroll()}
          />
        </View>
      )
    );
  }
}

export default Quiz;


// state = {
// isModalVisible: false,
// fabActive: false,
// };
// showModal = () => this.setState({ isModalVisible: true });
//
// hideModal = () => this.setState({ isModalVisible: false });
//
// handleFabClick = () =>
//   this.setState({ fabActive: !this.state.fabActive, isModalVisible: true });
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
