import COLORS from '../Common/Colors';

const style = {
  title: {
    fontSize: 20,
    fontWeight: '400',
    padding: '5%',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: '300',
    padding: '5%',
    textAlign: 'justify',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  linkContainer: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLOR_SHADE,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 18,
  },
  button: {
    backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: COLORS.WHITE,
  },
  phoneNumberContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneCallToAction: {
    flexDirection: 'row',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.BACKGROUND_COLOR_PRIMARY,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    width: 250,
    borderRadius: 5,
  },
  phoneIcon: {
    width: 35,
    height: 35,
  },
  phoneText: {
    fontSize: 22,
    fontWeight: '300',
  },
  phoneInfoText: {
    fontSize: 18,
    fontWeight: '300',
    padding: 10,
  },
  emailCallToAction: {
    flexDirection: 'row',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.BACKGROUND_COLOR_PRIMARY,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    width: 300,
    borderRadius: 5,
  },
  emailText: {
    fontSize: 16,
    fontWeight: '300',
  },
};

export default style;
