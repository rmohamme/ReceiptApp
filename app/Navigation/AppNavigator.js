import React from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator, DrawerNavigator } from 'react-navigation'

import HomeScreen from '../components/HomeScreen'
import TestScreen from '../components/TestScreen'

const MainStack = createStackNavigator({
    Home: HomeScreen,
    Test: TestScreen,
  },
  {
    initialRouteName: 'Home'
  }
);

export default MainStack
