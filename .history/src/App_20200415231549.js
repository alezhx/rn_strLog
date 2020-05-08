import * as React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Workouts from 'src/views/Workouts'

function HomeScreen() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: 'red' }}>
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

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="strLog" component={HomeScreen} />
        <Tab.Screen 
          name="Workouts" 
          component={Workouts} 
          options={{ title: 'My home' }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}