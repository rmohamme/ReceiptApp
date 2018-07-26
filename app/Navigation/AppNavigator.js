import React from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator, DrawerNavigator, StackNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../components/HomeScreen'
import TestScreen from '../components/TestScreen'
import CameraScreen from '../components/Camera'

const BottomBar = createBottomTabNavigator(
      {
        Home: HomeScreen,
        Camera: CameraScreen,
        Test: TestScreen,
      },
      {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
              iconName = `ios-home${focused ? '' : '-outline'}`;
            } else if (routeName === 'Camera') {
              iconName = `ios-camera${focused ? '' : '-outline'}`;
            } else if (routeName === 'Test') {
              iconName = `ios-contact${focused ? '' : '-outline'}`;
            }

            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Ionicons name={iconName} size={35} color={tintColor} />;
          },
          header: 'null'
        }),
        tabBarOptions: {
          activeTintColor: 'purple',
          inactiveTintColor: 'gray',
        },
      },
      {
        headerMode: 'none'
      }
    );

const MainStack = createStackNavigator({
    Home: HomeScreen,
    Test: TestScreen,
    Camera: CameraScreen,
    bottomBar: BottomBar
  },
  {
    initialRouteName: 'bottomBar',
    headerMode: 'none',
  }
);

export default MainStack
