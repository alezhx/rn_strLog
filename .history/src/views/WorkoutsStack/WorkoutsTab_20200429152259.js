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
import {AddButton} from 'src/assets/AddButton.png'

export default class WorkoutsTab extends Component {

  renderAddFileButton() {
    return(
        <TouchableOpacity
            onPress={() => {
              // NAVIGATE TO NEW WORKOUT SCREEN
            }}
            // style={styles.addButton}
        >
            <Image source={require('src/assets/AddButton.png')}/>
        </TouchableOpacity>
    )
}

  render() {
    return (
      <View style={styles.root}>

        <Text>HELLO WORLD</Text>
        {this.renderAddFileButton()}
        <Text>OKOKOK</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: '#000000'
  },
  addButton: {
    backgroundColor: '#FFFFFF',
		position: 'absolute',
		right: 0,
		bottom: 0,
  },

})