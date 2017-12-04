import COLORS from '../Common/Colors';

const style = {
  icon: {
    width: 28,
    height: 13,
  },
  parent: {
    backgroundColor: COLORS.WHITE,
  },
  searchSection: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultSection: {
    width: '100%',
    height: '75%',
  },
  searchInputContainer: {
    width: '90%',
    height: '35%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: COLORS.BACKGROUND_COLOR_SECONDARY,
    borderRadius: 10,
    flexDirection: 'row',
  },
  textInputContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 15,
  },
  textInput: {
    ios: {
      fontSize: 18,
      width: '100%',
    },
    android: {
      fontSize: 18,
      width: '100%',
    },
  },
  searchIconContainer: {
    justifyContent: 'center',
    width: '10%',
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
  resultItemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '5%',
  },
  resultIcon: {
    width: 100,
    height: 100,
  },
  resultTextContainer: {
    marginLeft: '5%',
  },
  resultText: {
    fontSize: 22,
    fontWeight: '200',
  },
};

export default style;
//
// borderColor: 'purple',
//   borderWidth: 1,
//   borderStyle: 'solid',
