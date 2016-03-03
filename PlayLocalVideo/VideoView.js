
'use strict';
import React, {
  StyleSheet,
  View,
  Text,
  AlertIOS,
  Component,
  NavigatorIOS,
  Stylesheet
} from 'react-native'

import Video from 'react-native-video'
export default class VideoView extends Component {
    constructor(props){
        super(props)
       
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Video source={{uri: "emoji zone"}} // Can be a URL or a local file.
                    rate={1.0}                   // 0 is paused, 1 is normal.
                    volume={1.0}                 // 0 is muted, 1 is normal.
                    muted={false}                // Mutes the audio entirely.
                    paused={false}               // Pauses playback entirely.
                    resizeMode="contain"           // Fill the whole screen at aspect ratio.
                    repeat={true}                // Repeat forever.
                    onLoadStart={this.loadStart} // Callback when video starts to load
                    onLoad={this.setDuration}    // Callback when video loads
                    onProgress={this.setTime}    // Callback every ~250ms with currentTime
                    onEnd={this.onEnd}           // Callback when playback finishes
                    onError={this.videoError}    // Callback when video cannot be loaded
                    style={styles.backgroundVideo} 
                    />
            </View>
        );
    }
}

// Later on in your styles..
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});