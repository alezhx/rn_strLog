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
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
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
      options={{
        tabBarVisible: false
      }}
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
  <Tabs.Navigator>
    <Tabs.Screen name="strLog" component={HomeStackScreen} />
    <Tabs.Screen name="Workouts" component={WorkoutStackScreen} 
      options={{tabBarVisible: route.state.index === 0}}
    />
    <Tabs.Screen name="Settings" component={HomeStackScreen} />
  </Tabs.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={TabsScreen}
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
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
