import COLORS from '../Common/Colors';

const style = {
  icon: {
    width: 28,
    height: 13,
  },
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
  },
  sliderItem: {
    backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY,
    width: '90%',
    height: '85%',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
  },
  sliderImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '40%',
    padding: 10,
  },
  sliderImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  sliderTextContentContainer: {
    width: '100%',
    height: '60%',
    padding: 15,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  titleContainer: {
    width: '70%',
  },
  title: {
    fontSize: 20,
    color: COLORS.WHITE,
    fontWeight: '400',
  },
  dateContainer: {
    width: '30%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 12,
    color: COLORS.WHITE,
  },
  descriptionContainer: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  description: {
    fontSize: 18,
    color: COLORS.WHITE,
    textAlign: 'justify',
    height: '70%',
  },
  readMoreText: {
    color: COLORS.WHITE,
  },
  readMoreContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
};

export default style;
//
// borderStyle: 'solid',
//   borderColor: 'red',
//   borderWidth: 1,
