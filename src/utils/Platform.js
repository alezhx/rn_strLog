import {Dimensions, Platform} from 'react-native';

const PLATFORM = {
  isIOS: Platform.OS === "ios",
  isAndroid: Platform.OS === "android",
  isPad: (Platform.OS && Platform.isPad),
  isIPhoneX: (Platform.OS === "ios" && !Platform.isPad && ((Dimensions.get('window').height) >=812))
};

export {
  PLATFORM
};