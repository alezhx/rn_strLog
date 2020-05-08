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
import {AddButton} from 'src/assets/AddButton.png';
import palette from 'src/styles/palette';

const SampleWorkouts = [
  {name: 'Push (PPL)', details: 'Push pull legs - Day 1'},
  {name: 'Pull (PPL)', details: 'Push pull legs - Day 2'},
  {name: 'Legs (PPL)', details: 'Push pull legs - Day 3'},
]

export default class WorkoutsTab extends Component {

  renderSampleWorkouts = () => { 
    return (
      <View>
        <View style={{
          backgroundColor: palette.lightGray, 
          paddingTop: 20,
          paddingLeft: 15,
          paddingBottom: 10
        }}>
          <Text>
            Example Workouts
          </Text>
        </View>
        <FlatList
          data={SampleWorkouts}
          renderItem={({item,index})=>this.renderFlatListItem(item, index)}
          keyExtractor = {(item,index) =>{
            return 'key' + item.name + index
          }}
          scrollEnabled={false}
        />
      </View>
    )
  }

  renderFlatListItem = (item, index) => {
    return (
      <View style={{backgroundColor:'blue', padding:20, border}}>
        <Text>{item.name}</Text>
        <Text>{item.details}</Text>
        <View style={styles.lineStyle} />
      </View>
    )
  }

  renderAddFileButton = () => {
    return(
        <TouchableOpacity
            onPress={() => {
              // NAVIGATE TO NEW WORKOUT SCREEN
            }}
            // style={{backgroundColor:'white'}}
            style={styles.addButton}
        >
            <Image source={require('src/assets/AddButton.png')}/>
        </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.root}>
        {this.renderSampleWorkouts()}
        {this.renderAddFileButton()}
        <Text>OKOKOK</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: '#FFFFFF'
  },
  addButton: {
    // backgroundColor: '#FFFFFF',
		position: 'absolute',
		right: 20,
		bottom: 30,
  },
  lineStyle: {
    backgroundColor: palette.lineColor,
    height: 1,
    position:'absolute',
    left: 76, right: 0, bottom:0,
  },
})