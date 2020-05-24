import React, {Component} from 'react';
import {
  FlatList,
  SectionList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
} from 'react-native';
import {NavBarHeight, ScreenDimensions, TabBar} from 'src/utils/Dimensions';
import {AddButton} from 'src/assets/AddButton.png';
import palette from 'src/styles/palette';
import { HighlightButton } from 'src/basecomponents/HighlightButton';

import { SearchBar } from 'react-native-elements';


const Exercises = [
  {name: 'Pull Up'},
  {name: 'Lat Pulldown'},
  {name: 'Seated Cable Row'},
  {name: 'Incline Dumbbel Curl'},
  {name: 'Face Pull'},
  {name: 'Dumbbell Shrug'}
]

export default class ExercisesTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      exercises: []
    }
  };

  componentDidMount = () => {
    this.fetchExercises()
  }

  fetchExercises = () => {
    console.log('fetching...')
    AsyncStorage.getItem('Exercises', (err,res) => {
      this.setState({exercises: res}, ()=>console.log('TESTEST', this.state.exercises))
      if (err) console.log(err)
    })
  }


  renderSampleExercises = () => { 
    return (
      <View>
        {/* <FlatList
          data={SampleExercises}
          renderItem={({item,index})=>this.renderWorkoutListItem(item, index)}
          keyExtractor = {(item,index) =>{
            return 'key' + item.name + index
          }}
          scrollEnabled={false}
        /> */}
        <FlatList
          style={{height:'100%'}}
          ListHeaderComponent={<View style={{height:30}}/>}
          data={Exercises}
          keyExtractor = {(item,index) =>{
            return 'key' + item.name + index
          }}
          renderItem={({item,index})=>this.renderWorkoutListItem(item, index)}
          
          // renderItem={({ item }) => <Item title={item} />}
        />
      </View>
    )
  }

  renderWorkoutListItem = (item, index) => {
    return (
      <HighlightButton 
        style={{padding:16}}
        title={item.name}
        onPress={()=>alert('Workout details!')}
      >
        <View style={styles.lineStyle} />
      </HighlightButton>
    )
  }

  renderUserWorkouts = () => {

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
        renderItem={({item,index})=>this.renderWorkoutListItem(item,index)}
        keyExtractor = {(item,index) =>{
          return 'key' + item.name + index
        }}
        // scrollEnabled={false}
      />
    </View>
    )
  }

  renderAddFileButton = () => {
    return(
        <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('New Exercise')
            }}
            // style={{backgroundColor:'white'}}
            style={styles.addButton}
        >
            <Image source={require('src/assets/AddButton.png')}/>
        </TouchableOpacity>
    )
  }

  updateSearch = (searchInput) => {
    this.setState({searchInput})
  }

  renderSearchBar = () => {
    const { searchInput } = this.state;

    return (
      <SearchBar
        placeholder={'Search exercises...'}
        inputStyle={{fontSize:15}}
        containerStyle={{backgroundColor:palette.secondary.main, height:62}}
        inputContainerStyle={{backgroundColor:palette.white}}
        platform={'ios'}
        onChangeText={this.updateSearch}
        value={searchInput}
      />
    );
  }

  render() {
    return (
      <View style={styles.root}>
        {this.renderSearchBar()}
        {this.renderSampleExercises()}
        {/* {this.renderUserWorkouts()} */}
        {this.renderAddFileButton()}
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
    right: 0, bottom:0,
  },
})