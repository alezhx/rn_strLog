import React, {Component} from 'react';
import {
  ActivityIndicator,
  Alert,
  DeviceEventEmitter,
  FlatList,
  Image,
  Keyboard,
  NativeModules,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavBarHeight, ScreenDimensions, TabBar} from 'src/utils/Dimensions';

export default class WorkoutsTab extends Component {


  render() {
    return (
      <View style={styles.root}>

        <Text>HELLO WORLD</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: '#cc66ff'
  },
  addButton: {
		position: 'absolute',
		right: 20,
		bottom: TabBar.height+35,
  },

})