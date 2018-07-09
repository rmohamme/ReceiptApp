import React from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator, DrawerNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation'; 

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

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default MainStack
