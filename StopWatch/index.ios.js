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
  TouchableHighlight,TouchableOpacity,Image
} from 'react-native';
import Common from './Common'

class StopWatch extends Component {
    
  constructor(props){
      super(props);
      this.state={
          count: 0.0.toFixed(1),
          isPlay: false
      }   
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.restView}>
            <TouchableHighlight style={styles.restBtn} onPress={this._rest.bind(this)}>
                <Text style={{color:'white'}}>重置</Text>
            </TouchableHighlight>
        </View>
        <View style={styles.timeView}>
            <View style={[styles.countView]}>
                <Text style={[styles.countFont]}>{this.state.count}</Text>
            </View>
        </View>
        <View style={styles.buttonView}>
            <TouchableOpacity style={styles.playBtn} onPress={this._start.bind(this)} activeOpacity={0.9}>
                <Image
                    style={styles.icon}
                    source={require('image!play')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.pauseBtn} onPress={this._stop.bind(this)} activeOpacity={0.9}>
                <Image
                    style={styles.icon}
                    source={require('image!pause')}
                />
            </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  _start(){
      if(this.state.isPlay==true){
          return
      }
      this.setState({
           isPlay: true,
      })
      this.timer = setInterval(this.updateTimer.bind(this), 100); 
  }
  
  _stop(){
      clearInterval(this.timer);
      this.setState({
          isPlay: false
      });
  }
  
  updateTimer(){    
     this.setState({
          count: Common.dcmAdd(this.state.count,0.1).toFixed(1)
     });     
  }
  
  _rest(){
      clearInterval(this.timer);
      this.setState({
          isPlay: false,
          count: 0.0.toFixed(1)
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090119',
  },
  countView:{
      flex:2,
      justifyContent: 'center',
      alignItems: 'center',
  },
  restView:{
      marginRight: 14,
      marginTop: 20,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
  },
  restBtn:{
      width: 68,
      alignItems: 'center',
      justifyContent: 'center',
  },
  countFont:{
    fontSize: 100,
    color: '#fff',
    fontFamily: 'Avenir Next',
    fontWeight: '100'
  },
  timeView: {
      flex: 2,
  },
  buttonView: {
      flex: 3,
      flexDirection: 'row'
  },
  playBtn:{
      flex: 1,
      backgroundColor: '#4037f8',
      alignItems: 'center',
      justifyContent: 'center',
  },
  pauseBtn:{
      flex: 1,
      backgroundColor: '#5cb300',
      alignItems: 'center',
      justifyContent: 'center',
  },
  icon:{
      
  }
});

AppRegistry.registerComponent('StopWatch', () => StopWatch);
