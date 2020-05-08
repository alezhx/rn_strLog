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
} from 'react-native';
import {NavBarHeight, ScreenDimensions, TabBar} from 'src/utils/Dimensions';
import {AddButton} from 'src/assets/AddButton.png';
import palette from 'src/styles/palette';
import { TextInput } from 'react-native-gesture-handler';


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
          sections={DATA}
          keyExtractor = {(item,index) =>{
            return 'key' + item.name + index
          }}
          renderItem={({item,index})=>this.renderSectionListItem(item, index)}
          // renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <View style={{
              backgroundColor: palette.extraLightGray, 
              paddingTop: 20,
              paddingLeft: 15,
              paddingBottom: 10
            }}>
              <Text>{title}</Text>
            </View>
            )}
          stickySectionHeadersEnabled={false}
        />
      </View>
    )
  }

  renderSectionHeaders = (section) => {
    <View style={{
      backgroundColor: palette.extraLightGray, 
      paddingTop: 20,
      paddingLeft: 15,
      paddingBottom: 10
    }}>
      <Text>{title}</Text>
    </View>
  }

  renderSectionListItem = (item, index) => {
    return (
      <TextInput 
        onChangeText={text => this.setState({workoutName:text})}
        
      />
    )
  }

  render() {
    return (
      <View style={styles.root}>
        {this.renderWorkoutName()}
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