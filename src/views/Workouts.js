import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WorkoutsTab from './WorkoutsStack/WorkoutsTab'
import { createStackNavigator } from '@react-navigation/stack';

function ExercisesTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const WorkoutStack = createStackNavigator();

const WorkoutsTabStack = () => (
  <WorkoutStack.Navigator
    screenOptions={{
      title: 'strLog',
      headerStyle: {
        backgroundColor: '#30D158',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        // fontWeight: 'bold',
      },
    }}
  >
    <WorkoutStack.Screen name="AllWorkouts" component={WorkoutsTab} />
    <WorkoutStack.Screen name="NewWorkout" component={WorkoutsTab} />
    
  </WorkoutStack.Navigator>
)

export default function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Workouts" component={WorkoutsTab} />
        <Tab.Screen name="Exercises" component={ExercisesTab} />
      </Tab.Navigator>
  );
}
