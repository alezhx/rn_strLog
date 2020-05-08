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
            style={styles.addButton}
        >
            <Image source={require(AddButton)}/>
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
    backgroundColor: '#cc66ff'
  },
  addButton: {
		position: 'absolute',
		right: 20,
		bottom: 100,
  },

})