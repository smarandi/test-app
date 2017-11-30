import COLORS from './Colors';

const style = {
  overlayContainer: {
    display: 'flex',
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileViewContainer: {
    width: 325,
    height: 275,
    backgroundColor: COLORS.BACKGROUND_COLOR_SHADE,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileViewLabel: {
    fontSize: 20,
  },
  textInput: {
    ios: {
      fontSize: 20,
      paddingTop: 25,
      borderWidth: 1,
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'grey',
      width: '70%',
    },
    android: {
      fontSize: 20,
      paddingTop: 25,
      width: '70%',
    },
  },
  buttonContainer: {
    marginTop: 45,
    width: 180,
    alignItems: 'center',
    backgroundColor: COLORS.YELLOW_SHADE,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    fontSize: 20,
    padding: 5,
    color: COLORS.BLACK,
  },
  registrationText: {
    fontSize: 16,
    paddingTop: 10,
    color: COLORS.WHITE,
  },
};

export default style;
