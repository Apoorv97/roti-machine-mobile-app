import React from 'react'

import { Platform, StatusBar } from "react-native";
// import { Router, Scene, Stack} from 'react-native-router-flux'
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createAppContainer, StackNavigator,
  TabNavigator,
  SwitchNavigator} from 'react-navigation'
import Home from './Home.js'
import Order from './Order.js'
import SignIn from './Signin.js'
import SignUp from './Signup.js'
import Profile from './Profile.js'
import FontAwesome from "react-native-vector-icons/FontAwesome";

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};
export const SignedOut = createStackNavigator({
    SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up"
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In"
    }
  }
});

export const SignedIn = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({tintColor}) => (
          <FontAwesome name="home" size={20} color={tintColor} />
        )
      }
    },
    Order: {
      screen: Order,
      navigationOptions: {
        tabBarLabel: "Order",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="shopping-cart" size={20} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user" size={20} color={tintColor} />
        )
      }
    }
  },

  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
);




// export const SignedIn = () => (
//    <Router>
//    <Scene>
//          <Scene key = "home" component = {Home} title = "Home" initial = {true} back={false}/>
//          <Scene key = "order" component = {Order} title = "Order" />
//
//      </Scene>
//    </Router>
// )
