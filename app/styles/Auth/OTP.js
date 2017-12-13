import COLORS from '../Common/Colors';

const style = {
  overlayContainer: {
    display: 'flex',
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileViewContainer: {
    width: '100%',
    height: 300,
    backgroundColor: COLORS.BACKGROUND_COLOR_SHADE,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  mobileViewLabel: {
    fontSize: 18,
    /* TODO: Add font familty */
    // fontFamily
  },
  changeNumber: {
    /* TODO: Add font familty */
    fontSize: 14,
    color: COLORS.BACKGROUND_COLOR_PRIMARY,
  },
  resendCode: {
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 30,
  },
  inputContainer: {
    width: '80%',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
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
      width: '20%',
    },
    android: {
      fontSize: 20,
      paddingTop: 25,
      width: '20%',
      textAlign: 'center',
    },
  },
  buttonContainer: {
    marginTop: '10%',
    width: 180,
    alignItems: 'center',
    backgroundColor: COLORS.YELLOW_SHADE,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.BLACK,
  },
  buttonText: {
    fontSize: 20,
    padding: 5,
    color: COLORS.BLACK,
  },

};

export default style;
