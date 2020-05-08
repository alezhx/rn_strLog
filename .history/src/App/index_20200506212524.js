import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AuthContext } from "./context";
import {
  SignIn,
  CreateAccount,
  Search,
  Home,
  Details,
  Search2,
  Profile,
  Splash
} from "./Screens";

import Workouts from 'src/views/Workouts'
import NewWorkout from 'src/views/WorkoutsStack/NewWorkout'
import { ThemeProvider } from "react-native-elements";

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import palette from "src/styles/palette";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In" }}
    />
    <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{ title: "Create Account" }}
    />
  </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const WorkoutStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
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
    <HomeStack.Screen 
      name="Home Tabs"
      component={TabsScreen}
    />
    <HomeStack.Screen
      name="Workouts"
      component={Workouts}
    />
    <HomeStack.Screen
      name="New Workout"
      component={NewWorkout}
    />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name
      })}
    />
  </HomeStack.Navigator>
);

const WorkoutStackScreen = () => (
  <WorkoutStack.Navigator
    // screenOptions={{
    //   title: 'strLog',
    //   headerStyle: {
    //     backgroundColor: '#30D158',
    //   },
    //   headerTintColor: 'black',
    //   headerTitleStyle: {
    //     // fontWeight: 'bold',
    //   },
    // }}
  >
    <WorkoutStack.Screen 
      name="Workouts"
      component={Workouts} 
      // options={{
      //   title: 'strLog',
      //   headerStyle: {
      //     backgroundColor: '#30D158',
      //   },
      //   headerTintColor: 'black',
      //   headerTitleStyle: {
      //     // fontWeight: 'bold',
      //   },
      // }}
    />
    <WorkoutStack.Screen
      name="New Workout"
      component={NewWorkout}
    />
  </WorkoutStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'strLog') {
          // iconName = focused
          //   ? 'ios-information-circle'
          //   : 'ios-information-circle-outline';
          return <FontAwesome name={'dumbbell'} size={size} color={color}/>
        } else if (route.name === 'Workouts') {
          iconName = focused ? 'book-open' : 'notebook'
          return <SimpleLineIcon name={iconName} size={size} color={color} />;
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
          return <MaterialIcon name={iconName} size={1.1*size} color={color} />;
        }

        // You can return any component that you like here!
        // return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: palette.newBlue,
      inactiveTintColor: 'gray',
    }}
  >
    <Tabs.Screen name="strLog" component={Home} />
    <Tabs.Screen name="Workouts" component={Workouts} />
    <Tabs.Screen name="Settings" component={Home} />
  </Tabs.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={HomeStackScreen}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false
        }}
      />
    )}
  </RootStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <ThemeProvider>
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
    </ThemeProvider>
  );
};
