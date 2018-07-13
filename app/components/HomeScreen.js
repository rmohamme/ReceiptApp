import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { Button } from 'react-native-elements'
import { RNCamera } from 'react-native-camera';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          raised
          backgroundColor='purple'
          title="Take Photo"
          onPress={() => this.props.navigation.navigate('Camera')}
        />
      </View>
    );
  }
};
