/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Image,
  View,
  StatusBarIOS,
  Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper';
import Camera from 'react-native-camera';
const {width,height} = Dimensions.get('window');
StatusBarIOS.setHidden(1);
class Snapchat extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false}>
        <View style={styles.left}>
          <Image style={{width,height,}} source={require('image!left')}/>
        </View>
        <View style={styles.main}>
          <Camera
            ref={(cam) => {
                this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}>
        </Camera>
        </View>
        <View style={styles.right}>
          <Image style={{width,height,}} source={require('image!right')}/>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  left: {
    flex: 1,
    
  },
  main: {
    flex: 1,
  },
  right: {
    flex: 1,
  },
  preview: {
      flex: 1,
  }
});

AppRegistry.registerComponent('Snapchat', () => Snapchat);
