import COLORS from '../Common/Colors';

const style = {
  scrollablePicker: {
    height: '25%',
    backgroundColor: COLORS.WHITE,
    // borderColor: 'red',
    // borderWidth: 1,
    // borderStyle: 'solid',
  },
  storyHeaderContainer: {
    height: '100%',
  },
  clickableImageStyle: {
    width: '100%',
    height: '100%',
  },
  bottomViewContainer: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'flex-end',
    height: '95%',
  },
  titleContainer: {
    width: '70%',
    backgroundColor: 'transparent',
  },
  titleText: {
    fontSize: 20,
    color: COLORS.WHITE,
  },
  dateContainer: {
    width: '30%',
    backgroundColor: 'transparent',
  },
  dateText: {
    fontSize: 14,
    color: COLORS.WHITE,
  },
  quoteText: {
    backgroundColor: 'transparent',
    fontSize: 16,
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  quoteContainer: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    paddingLeft: '55%',
    alignItems: 'flex-end',
    height: '50%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  storyPickerImageStyle: {
    ios: {
      width: 100,
      height: 100,
      paddingLeft: 10,
      paddingRight: 10,
      borderRadius: 50,
    },
    android: {
      width: 80,
      height: 80,
      paddingLeft: 10,
      paddingRight: 10,
      borderRadius: 50,
    },
  },
  storyPickerImageNotSelected: {
    width: 75,
    height: 75,
    opacity: 0.5,
    borderRadius: 40,
  },
  scrollListContainer: {
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  touchableNav: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',

  },
};

export default style;
// borderColor: 'red',
// borderStyle: 'solid',
// borderWidth: 1,