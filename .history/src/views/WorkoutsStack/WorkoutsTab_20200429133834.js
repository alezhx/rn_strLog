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
    backgroundColor: '#ffffff'
  },

})