// import React, {Component} from 'react';
// import {
//     View,
//     Text,
//     Alert,
//     StyleSheet,
// } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// export default class Workouts extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//         }
//     }


//     componentDidMount(): void {
//     }

//     componentWillUnmount(): void {
//     }

//     showAlert(title, message, actions) {
//         Alert.alert(
//             title,
//             message,
//             actions,
//             {cancelable: false}
//         )
//     }

//     showSpinner() {

//     }

//     hideSpinner() {

//     }

//     // 9. render
//     renderSubComponents() {
//         return (
//             <View style={styles.subContainer}>
//                 <Text>SubComponent</Text>
//             </View>
//         )
//     }

//     render() {
//         const Stack = createStackNavigator();
//         return (
//             <NavigationContainer>
//                 <Stack.Navigator>
//                     <Stack.Screen name="Home" component={HomeScreen} />
//                 </Stack.Navigator>
//             </NavigationContainer>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {

//     },
//     subContainer: {

//     }
// });

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}
