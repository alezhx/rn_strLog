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
  {name: 'Workout 1 - Push (PPL)'},
  {name: 'Workout 2 - Pull (PPL)'},
  {name: 'Workout 3 - Legs (PPL)'},
]

export default class WorkoutsTab extends Component {

  renderSampleWorkouts = () => { 
    return (
      <View>
        <View style={{
          backgroundColor: palette.extraLightGray, 
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
          renderItem={({item,index})=>this.renderSampleWorkoutItem(item, index)}
          keyExtractor = {(item,index) =>{
            return 'key' + item.name + index
          }}
          scrollEnabled={false}
        />
      </View>
    )
  }

  renderSampleWorkoutItem = (item, index) => {
    return (
      <TouchableOpacity style={{backgroundColor:'white', padding:20}}>
        <Text>{item.name}</Text>
        <View style={styles.lineStyle} />
      </TouchableOpacity>
    )
  }

  renderUserWorkouts = () => {
    const UserWorkouts = [
      {name: 'Workout 1 - Push (PPL)'},
      {name: 'Workout 2 - Pull (PPL)'},
      {name: 'Workout 3 - Legs (PPL)'},
      {name: 'Workout 1 - Push (PPL)'},
      {name: 'Workout 2 - Pull (PPL)'},
      {name: 'Workout 3 - Legs (PPL)'},
      {name: 'Workout 1 - Push (PPL)'},
      {name: 'Workout 2 - Pull (PPL)'},
      {name: 'Workout 3 - Legs (PPL)'},
      {name: 'Workout 1 - Push (PPL)'},
      {name: 'Workout 2 - Pull (PPL)'},
      {name: 'Workout 3 - Legs (PPL)'},
    ]

    return (
      <View>
        <View style={{
          backgroundColor: palette.extraLightGray, 
          paddingTop: 20,
          paddingLeft: 15,
          paddingBottom: 10
        }}>
          <Text>
            Custom Workouts
          </Text>
        </View>
      <FlatList
        data={UserWorkouts}
        renderItem={({item,index})=>this.renderSampleWorkoutItem(item,index)}
        keyExtractor = {(item,index) =>{
          return 'key' + item.name + index
        }}
      />
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
        {this.renderUserWorkouts()}
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