import COLORS from '../Common/Colors';

const style = {
  sliderItem: {
    // backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY,
    width: '85%',
    height: '75%',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    marginTop: '10%',
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  questionNumber: {
    fontSize: 20,
    fontWeight: '300',
  },
  questionTextContainer: {
    width: '100%',
  },
  questionText: {
    paddingLeft: '2%',
    fontSize: 20,
    fontWeight: '300',
  },
  optionsContainer: {
    padding: '5%',
  },
  singleOptionContainer: {
    marginTop: '5%',
    padding: '5%',
    borderStyle: 'solid',
    borderColor: '#c1bdc8',
    borderWidth: 1,
    borderRadius: 10,
  },
  optionText: {
    fontSize: 20,
    fontWeight: '300',
  },
  sliderContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    paddingTop: '3%',
    paddingBottom: '3%',

  },
  sliderExternal: {
    width: '90%',
    height: 15,
    borderStyle: 'solid',
    borderColor: COLORS.MAGENTA_SHADE,
    borderWidth: 1,
    borderRadius: 15,
  },
  sliderProgressBar: {

  },
  timerContainer: {
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: '5%',
  },
  timerText: {
    fontSize: 18,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  sliderAndTimerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '80%',
    height: '75%',
    backgroundColor: COLORS.YELLOW_SHADE,
    borderRadius: 10,
  },
  modalCta: {
    ios: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.MAGENTA_SHADE,
      height: '15%',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    android: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.MAGENTA_SHADE,
      height: '15%',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      marginTop: '-5%',
    },
  },
  modalCtaText: {
    color: COLORS.WHITE,
    fontSize: 24,
    fontWeight: '600',
  },
  modalInfoContainer: {
    position: 'absolute',
    width: '100%',
    height: '80%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: '10%',
  },
};

export default style;
//
// borderStyle: 'solid',
//   borderColor: 'red',
//   borderWidth: 1,