import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Alert
} from 'react-native';
import { Button } from 'react-native-elements'
import Camera from 'react-native-camera'
import RNFetchBlob from 'react-native-fetch-blob'


export default class CameraS extends React.Component {

  takePicture() {
   this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));

    // Alert.alert(
    //   'Image was taken',
    //   [
    //     {text: 'OK', onPress: () => console.log('OK')},
    //   ],
    // )

    Alert.alert(
      'Alert',
      'Image was taken',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
            [CAPTURE]
          </Text>
      </Camera>
    );
  }
};

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
