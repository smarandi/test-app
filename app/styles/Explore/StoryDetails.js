import COLORS from '../Common/Colors';

const style = {
  imageView: {
    height: '40%',
  },
  textView: {
    height: '60%',
    backgroundColor: COLORS.WHITE,
    padding: 20,
  },
  clickableImageStyle: {
    width: '100%',
    height: 400,
  },
  dateContainer: {
    width: '25%',
    justifyContent: 'flex-end',
  },
  date: {
    fontSize: 10,
  },
  titleText: {
    fontSize: 16,
  },
  titleContainer: {
    width: '75%',
    paddingRight: 5,
  },
  titleAndDateContainer: {
    flexDirection: 'row',
  },
  storyContainer: {
    flex: 1,
    paddingTop: 20,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'red',
  },
  story: {
    textAlign: 'justify',
  },
};

export default style;
