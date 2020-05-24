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
  Button,
  AsyncStorage
} from 'react-native';
import {NavBarHeight, ScreenDimensions, TabBar} from 'src/utils/Dimensions';
import {AddButton} from 'src/assets/AddButton.png';
import palette from 'src/styles/palette';
import { TextInput } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import {HighlightButton} from 'src/basecomponents/HighlightButton'
import AutoAdjustText from 'src/basecomponents/AutoAdjustText';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const DATA = [
  {
    title: 'Exercise Name',
    data: [{type:'input', name:'My New Workout'}]
  },
  {
    title: 'Tracking Options',
    data: [
      {name:'Weight', unit:'lb'},
      {name:'Distance', unit:'mi'},
      {name:'Duration', icon:<Icon name={"md-time"} color={palette.white} size={18} />},
      {name:'Count', unit:'123'}
    ]
  },
]

const Trackers = {
  weight: 0,
  distance: 1,
  duration: 2,
  count: 3
}


export default class NewWorkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isButtonPressed: false,
      exerciseName: '',
      exercises: [],
      addExerciseButtonHighlighted: false,
      switchState:{
        Weight:true, 
        Distance:false, 
        Duration:false, 
        Count:false
      }
    }
  };

  renderExercises = () => {
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
            <Text style={{fontSize:12}}>Select a measurement to track. You can change your measurement system in Settings.</Text>
            </View>
            {/* <TouchableOpacity style={{backgroundColor:palette.white, padding:15}}>
              <Text style={{fontSize:18}}>Add Exercise</Text>
              <View style={{position:'absolute', right:15, top:'50%'}}>
                <Icon 
                  name="ios-add-circle-outline"
                  size={30}
                  color={palette.newBlue}
                />
              </View>
            </TouchableOpacity> */}
          </View>}
        />
      </View>
    )
  }

  renderSectionHeaders = (section) => {
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
          onChangeText={text => this.setState({exerciseName:text})}
          value={this.state.exerciseName}
        />
      )
    } else {
      return (
        // <CheckBox
        //   right
        //   iconRight
        //   title={item.icon}
        //   checkedIcon='dot-circle-o'
        //   uncheckedIcon='circle-o'
        //   checked={this.state.checked}
        // />
        <TouchableOpacity 
          style={{
            backgroundColor:palette.white, 
            padding:16, 
            flexDirection:'row', 
            alignItems:'center'
          }}
          onPress={()=>this.handleSwitch(item.name)}
          activeOpacity={1}
        >
          <View>
            <Text style={{fontSize:16}}>{item.name}</Text>
          </View>


          <View style={{ position:'absolute', right:16}}>
           {this.state.switchState[item.name] ?
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <View style={{
                backgroundColor:'#a5d6a7', 
                height:24, 
                width:45, 
                justifyContent:'center', 
                alignItems:'center', 
                borderTopLeftRadius:10, 
                borderBottomLeftRadius:10}} 
              />
              <View style={{backgroundColor:'#1b5e20', height:26, width:30,padding:5, justifyContent:'center', alignItems:'center'}}>
                {item.unit && <AutoAdjustText
                  style={{color:palette.white, fontWeight:'bold'}}
                  fontSize={12}
                  text={item.unit}
                  numberOfLines={1}
                />}
                {item.icon && item.icon}
              </View>
            </View>
            :
            <View style={{flexDirection:'row', alignItems:'center',}}>
            <View style={{
              backgroundColor:palette.darkGray, 
              height:26, width:30,padding:5, 
              justifyContent:'center', 
              alignItems:'center'
            }}>
              {item.unit && <AutoAdjustText
                style={{color:palette.white, fontWeight:'bold'}}
                fontSize={12}
                text={item.unit}
                numberOfLines={1}
              />}
              {item.icon && item.icon}
            </View>
            <View style={{
                backgroundColor:palette.lightGray, 
                height:24, 
                width:45, 
                justifyContent:'center', 
                alignItems:'center', 
                borderTopRightRadius:10, 
                borderBottomRightRadius:10}} 
            />
            </View>
          }
          </View>


          <View style={styles.lineStyle} />
        </TouchableOpacity>
        // <View
        //   style={{padding:20}}
        //   fontSize={18}
        //   title={item.name}
        //   onPress={()=>alert('Exercise Details!')}
        //   // HighlightedChildComponent={()=> 
        //   //   <View style={{position:'absolute', right:15, top:'50%'}}>
        //   //     <Text>({item.icon})</Text>
        //   //   </View>
        //   // }
        // >
        //   <View style={{position:'absolute', right:15, top:'100%'}}>
        //     <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'red'}}>
        //       <Text>( {item.icon} )</Text>
        //     </View>
        //   </View>
        //   <View style={styles.lineStyle} />
        // </View>
      )
    }
  }

  handleSwitch = (key) => {
    this.setState({
      switchState:{
        // ...this.state.switchState,
        [key]: !this.state.switchState[key]
        // [index]: true
      }
    }, ()=>console.log(this.state.switchState))
  }

  renderAddExerciseButton = () => {

  }

  handleClick = () => {
    // console.log('click event', e)
    this.setState({
        isButtonPressed: !this.state.isButtonPressed
    });
  }

  // saveToLocalStore = (obj) => {
  //   console.log('SAVING')
  //   let allExercises = []
  //   return AsyncStorage.getItem('Exercises', (err,res) => {
  //     let arr = allExercises.concat(JSON.parse(res));
  //     let final = [...arr, obj]
  //     AsyncStorage.setItem(
  //       'Exercises',
  //       JSON.stringify(final),
  //       (error) => console.log(final)
  //     )
  //   })
  // }

  saveToLocalStore = (obj,keyName) => {
    // obj = {trackers: this.state.switchState}
    console.log('SAVING')
    let allExercises = {}
    return AsyncStorage.getItem('Exercises', (err,res) => {
      allExercises = JSON.parse(res);
      allExercises[keyName] = obj
      AsyncStorage.setItem(
        'Exercises',
        JSON.stringify(allExercises),
        (error) => console.log(allExercises)
      )
    })
  }

  handleSave = () => {
    let exercise = {
      name: this.state.exerciseName,
      trackers: this.state.switchState
    }

    this.saveToLocalStore(exercise, this.state.exerciseName)
    this.props.navigation.navigate('Home Tabs')
  }

  renderSaveButton = (e) => {
    const {isButtonPressed} = this.state
    return (
      <View style={{width:'100%', height: '10%',}}>
        <HighlightButton
          onPress={()=>this.handleSave()}
          backgroundColor={palette.newBlue}
          underlayBackgroundColor={palette.green}
          fontColor={palette.white}
          title={'Save Exercise'}
          fontSize={20}
          style={{flexDirection:'column', height:'100%', justifyContent:'center', alignItems:'center'}}
        >
          <Icon
            name="ios-checkmark-circle"
            size={25}
            color="white"
            style={{position:'absolute', top:'27.5%', left:'25%'}}
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
        {this.renderExercises()}
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