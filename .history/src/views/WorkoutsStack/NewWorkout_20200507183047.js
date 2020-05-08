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
  // Button
} from 'react-native';
import {NavBarHeight, ScreenDimensions, TabBar} from 'src/utils/Dimensions';
import {AddButton} from 'src/assets/AddButton.png';
import palette from 'src/styles/palette';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import {HighlightButton} from 'src/basecomponents/HighlightButton'

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
      isButtonPressed: false,
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
            <View style={{paddingTop:10, paddingLeft:10, paddingBottom:60}}>
            <Text>Swipe to rename or delete</Text>
            </View>
            <View style={{backgroundColor:palette.green}}>
            <TouchableOpacity style={{backgroundColor:palette.white, padding:15}}>
              <Text style={{fontSize:18}}>Add Exercise</Text>
              <View style={{position:'absolute', right:15, top:'50%'}}>
                <Icon 
                  name="ios-add-circle-outline"
                  size={30}
                  color="blue"
                />
              </View>
            </TouchableOpacity>
            </View>
          </View>}
        />
      </View>
    )
  }

  renderSectionHeaders = (section) => {
    console.log('section', section)
    return (
    <View style={{
      backgroundColor: palette.secondary.main, 
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
          style={{padding:10, fontSize:18, backgroundColor:palette.white}}
          onChangeText={text => this.setState({workoutName:text})}
          value={this.state.workoutName}
        />
      )
    } else {
      return (
        // <View style={{backgroundColor:'rgb(10,132,255)'}}>
        //   <TouchableOpacity style={{backgroundColor:palette.white, padding:12}}>
        //     <Text style={{fontSize:18}}>{item.name}</Text>
        //     <View style={styles.lineStyle} />
        //   </TouchableOpacity>
        // </View>
        <HighlightButton
          style={{padding:12}}
          title={item.name}
          onPress={()=>alert('Exercise Details!')}
        >
          <View style={styles.lineStyle} />
        </HighlightButton>
      )
    }
  }

  renderAddExerciseButton = () => {

  }

  handleClick = () => {
    // console.log('click event', e)
    this.setState({
        isButtonPressed: !this.state.isButtonPressed
    });
  }

  renderSaveButton = (e) => {
    const {isButtonPressed} = this.state
    return (
      <View style={{width:'100%', height: '10%',}}>
        <HighlightButton
          onPress={()=>this.handleClick()}
          backgroundColor={palette.newBlue}
          underlayBackgroundColor={palette.green}
          fontColor={palette.white}
          title={'Save Workout'}
          style={{flexDirection:'column', height:'100%', justifyContent:'center', alignItems:'center'}}
        >
          <Icon
            name="ios-checkmark-circle"
            size={25}
            color="white"
            style={{position:'absolute', top:'30%', left:'25%'}}
          />        
        </HighlightButton>
        {/* <Button
          onPress={e => this.handleClick(e)}
          buttonStyle={isButtonPressed ? styles.saveButtonPressed : styles.saveButton}
          icon={
            <Icon
              name="ios-checkmark-circle"
              size={25}
              color="white"
              style={{paddingRight:8}}
            />
          }
          title="Save Workout"
        /> */}
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
    backgroundColor: palette.secondary.main
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
    left:12, right: 12, bottom:0,
  },
  saveButton: {
    backgroundColor: 'rgb(10,132,255)',
    height:'100%',
    color: palette.white
  },
  saveButtonPressed: {
    backgroundColor: palette.green,
    height: '100%',
    color: palette.black
  }
})