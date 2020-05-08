import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WorkoutsTab from './WorkoutsStack/WorkoutsTab'

function ExercisesTab() {
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
        <Tab.Screen name="Workouts" component={WorkoutsTab} />
        <Tab.Screen name="Exercises" component={ExercisesTab} />
      </Tab.Navigator>
  );
}
