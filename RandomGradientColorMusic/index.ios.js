/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

import Sound from 'react-native-sound';
import LinearGradient from 'react-native-linear-gradient';

const colors = ['rgba(125, 125, 125, 0.2)','rgba(255, 0, 0, 0.2)','rgba(0, 255, 0, 0.2)','rgba(0, 0, 255, 0.2)','rgba(110, 110, 110, 0.2)'];
const start = [0.0,0.0];
const end = [1.0,1.0];
const locations = [0.10, 0.30, 0.50, 0.70, 0.90];
class RandomGradientColorMusic extends Component {
   constructor(props) {
        super(props);
        this.state = {
            isPlay: false,
            bgColor: 'rgb(43,0,133)',
        }
   }  
   
  render() {
    return (
      <View style={[styles.container,{backgroundColor: this.state.bgColor}]}>
          <LinearGradient
                start={start}
                end={end}
                locations={locations}
                colors={colors}
                style={styles.linearGradient}>
          <TouchableHighlight onPress={this._click.bind(this)} underlayColor='transparent'>
            <View style={styles.buttton}>
              <Image source={require('image!music play')} resizeMode='cover'></Image>
            </View>
          </TouchableHighlight>
        </LinearGradient> 
      </View>
    );
  }
  
  _click(){
      if(!this.state.isPlay){
          this._play();
      }else{
          this._stop();
      }
  }
  
  _play(){
      this.setState({
          isPlay: true
      });
      
      this._soundPlay();
      
      this.timer = setInterval(() => {
        this.setState({
            bgColor: this._randomColor(),
        })
      },200);
  }
  _soundPlay(){
    const that = this

    if (!this.music) {
      this.music = new Sound('Ecstasy.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('播放失败', error);
        } else {
          that.music.setNumberOfLoops(-1).play();
        }
      })
    } else {
      this.music.play();
    }
  }
  _stop(){
      clearInterval(this.timer);
      this.setState({
          isPlay: false
      });
      
      this.music.stop();
  }
  
  _randomColor(){
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      return 'rgb('+r+','+g+','+b+')';
  }
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(256,256,256,0.2)'
  }
});

AppRegistry.registerComponent('RandomGradientColorMusic', () => RandomGradientColorMusic);
