// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Workouts from 'src/views/Workouts'

// function HomeScreen() {
//   return (
//     <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: 'red' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <SafeAreaProvider>
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="strLog" component={HomeScreen} />
//         <Tab.Screen 
//           name="Workouts" 
//           component={Workouts} 
//         />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'strLog' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
