/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import VisualView from './VisualView'
const { width,height } = Dimensions.get('window')
class FindMyLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "地址未知"
    };
  }
  render() {
    return (
     <Image style={{flex: 1,width,height}} source={require('image!bg')} resizeMode='contain'>
            <VisualView visualType="dark" style={[styles.container]}>
                <View style={styles.locationView}>
                    <Text style={{color: '#ffffff'}}>{this.state.location}</Text>
                </View>
                <View style={styles.bottomView}>
                     <TouchableHighlight onPress={this._getLocation.bind(this)} underlayColor={'transparent'}>
                        <View style={styles.buttonView}>
                            <Image style={styles.buttonImage}source={require('image!Find my location')} >
                              <Text style={{fontSize: 14,color: '#ffffff'}} >找寻我的地址</Text>  
                            </Image>
                        </View>
                     </TouchableHighlight>
                </View>
            </VisualView>
     </Image>
    );
  }
  
  _getLocation(){
      navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({position})
      },
      (error) => alert('定位发生错误'),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  locationView: {
    marginTop: 80,
    width: width - 40,
    marginRight: 20,
    marginLeft: 20,
    height: 60,
    backgroundColor: '#1B1323',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5 
  },
  bottomView: {
    width,
    position: 'absolute',
    bottom: 10,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    width: width - 40,
    marginRight: 20,
    marginLeft: 20,
    height:78,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    width: width -40,
    height: 78,
    marginRight: 20,
    marginLeft: 20,
    alignItems: 'center'
  },
});

AppRegistry.registerComponent('FindMyLocation', () => FindMyLocation);
