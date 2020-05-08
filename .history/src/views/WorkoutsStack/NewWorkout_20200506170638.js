import React, {Component} from 'react';
import {
  ActivityIndicator,
  Alert,
  DeviceEventEmitter,
  FlatList,
  SectionList,
  Image,
  Keyboard,
  NativeModules,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import {NavBarHeight, ScreenDimensions, TabBar} from 'src/utils/Dimensions';
import {AddButton} from 'src/assets/AddButton.png';
import palette from 'src/styles/palette';
import { TextInput } from 'react-native-gesture-handler';

const DATA = [
  {
    title: 'Workout Name',
    data: [{type:'input', name:'My New Workout'}]
  },
  {
    title: 'Exercises',
    data: [
      {name:'Lat Pulldown'},
      {name:'Seated Cable Row'},
      {name:'Incline Dumbbell Curl'},
      {name:'Face Pull'},
      {name:'Dumbbell Shrug'}
    ]
  },
]


export default class NewWorkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workoutName: '',
      exercises: [],
    }
  };

  renderWorkoutName = () => {
    return (
      <View>
        <SectionList
          style={{height:'90%'}}
          sections={DATA}
          keyExtractor = {(item,index) =>{
            return 'key' + item.name + index
          }}
          renderItem={({item,index})=>this.renderSectionListItem(item, index)}
          // renderItem={({ item }) => <Item title={item} />}
          // renderSectionHeader={({ section: { title } }) => (
          //   <View style={{
          //     backgroundColor: palette.extraLightGray, 
          //     paddingTop: 20,
          //     paddingLeft: 15,
          //     paddingBottom: 10
          //   }}>
          //     <Text>{title}</Text>
          //   </View>
          //   )}

          renderSectionHeader={({section})=>this.renderSectionHeaders(section)}
          stickySectionHeadersEnabled={false}
          ListFooterComponent={()=>
          <View>
            <Text>Swipe to rename or delete</Text>
          </View>}
        />
      </View>
    )
  }

  renderSectionHeaders = (section) => {
    console.log('section', section)
    return (
    <View style={{
      backgroundColor: palette.extraLightGray, 
      paddingTop: 20,
      paddingLeft: 15,
      paddingBottom: 10
    }}>
      <Text>{section.title}</Text>
    </View>
    )
  }

  renderSectionListItem = (item, index) => {
    if (item.type) {
      return (
        <TextInput 
          style={{padding:10, fontSize:18}}
          onChangeText={text => this.setState({workoutName:text})}
          value={this.state.workoutName}
        />
      )
    } else {
      return (
        <TouchableOpacity style={{backgroundColor:'rgba(10,132,255,0.3)', padding:20}}>
          <Text style={{fontSize:18}}>{item.name}</Text>
          <View style={styles.lineStyle} />
        </TouchableOpacity>
      )
    }
  }

  renderAddExerciseButton = () => {

  }

  renderSaveButton = () => {
    return (
      <View style={{width:'100%', height: '100%', backgroundColor:'green'}}>
        <Button
          // onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.root}>
        {this.renderWorkoutName()}
        {this.renderAddExerciseButton()}
        {this.renderSaveButton()}
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