import COLORS from './Colors';

const textInputFontSize = 16;

const style = {
  overlayContainer: {
    display: 'flex',
    flex: 1,
    position: 'absolute',
  },
  mobileViewContainer: {
    ios: {
      width: 350,
      backgroundColor: COLORS.BACKGROUND_COLOR_SHADE,
      borderRadius: 15,
      padding: 25,
    },
    android: {
      width: 350,
      backgroundColor: COLORS.BACKGROUND_COLOR_SHADE,
      borderRadius: 15,
      padding: 25,
    },
  },
  fullWidthTextInput: {
    ios: {
      fontSize: textInputFontSize,
      borderWidth: 1,
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'grey',
      width: '100%',
      paddingTop: 10,
    },
    android: {
      fontSize: textInputFontSize,
      width: '100%',
    },
  },
  classAndSchoolContainer: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  classDropdownContainer: {
    width: '30%',
  },
  schoolInputContainer: {
    width: '60%',
    marginLeft: 10,
    marginTop: 15,
  },
  cityDropdown: {
    width: '40%',
  },
  areaDropdown: {
    width: '55%',
  },
  schoolInputText: {
    ios: {
      fontSize: textInputFontSize,
      borderWidth: 1,
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'grey',
      marginTop: '5%',
    },
    android: {
      fontSize: textInputFontSize,
      marginTop: '-6%',
    },
  },
  emailAndMobileContainer: {
    paddingTop: 10,
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
  loginTextContainer: {
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
    paddingTop: 10,
    color: COLORS.WHITE,
  },
  termsAndConditionsText: {
    color: COLORS.WHITE,
  },
};

export default style;
