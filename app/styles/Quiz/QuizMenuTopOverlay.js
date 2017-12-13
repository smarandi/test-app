import COLORS from '../Common/Colors';

const style = {
  menuItemsContainer: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    // zIndex: 2,
    // borderStyle: 'solid',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  column: {
    flex: 1,
    backgroundColor: 'transparent',
    // borderStyle: 'solid',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  cell1: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  rowTop: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    // borderStyle: 'solid',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  rowMiddle: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    // borderStyle: 'solid',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  rowBottom: {
    flex: 4,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    // borderStyle: 'solid',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  touchableStyle: {
    ios: {
      width: 33,
      height: 33,
      borderRadius: 15,
      // backgroundColor: '#c0c0c0',
      position: 'absolute',
      top: '35%',
      left: '25%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    android: {
      width: 33,
      height: 33,
      borderRadius: 15,
      // backgroundColor: '#c0c0c0',
      position: 'absolute',
      top: '32%',
      left: '42%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  touchable: {
    flex: 1,
  },
};

export default style;
// borderStyle: 'solid',
//   borderColor: 'red',
//   borderWidth: 1,
