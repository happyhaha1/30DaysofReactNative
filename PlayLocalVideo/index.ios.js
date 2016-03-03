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
  NavigatorIOS,
  ListView,
  ScrollView,
  Image,
  TouchableHighlight
} from 'react-native';
import VideoView from './VideoView'

class PlayLocalVideo extends Component {
  render() {
    return (
        <NavigatorIOS
                style={{flex:1}}
                translucent={true} 
                tintColor={'white'}
                barTintColor={"#000000"}
                titleTextColor={"white"}
                initialRoute={{
                    component: List,
                    title: '本地mp4',
                    passProps: {},
                }}
            />
    );
  }
}

class List extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        }),
        loaded: false,
        };
    }
    componentDidMount() {
    
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data),
            loaded: true,
        });
    }
    
    render(){
        return(
            <ScrollView style={{flex:1,backgroundColor: 'black'}}>
                 <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderView.bind(this)}
                    style={styles.listView}
                ></ListView> 
            </ScrollView>
        );
    }
    
    
    renderView(video){
        
        return(
            <View style={[styles.videoView]}>
                <Image
                     style={[styles.iamge]}
                     source={video.image}>
                     <TouchableHighlight style={{flex:10,justifyContent: 'center',alignItems: 'center',height:30}} underlayColor='transparent'onPress={this._playVideo.bind(this,video)}>
                        <Image source={require('image!playBtn')} style={{resizeMode: 'contain'}}/>
                     </TouchableHighlight>
                     <View style={[styles.textView]}>
                        <Text style={[styles.voidoTitle]}>{video.title}</Text>
                        <Text style={[styles.voidoSource]}>{video.source}</Text>
                    </View>
                </Image>
            </View>
        );
    }
    
    _playVideo(video){
        this.props.navigator.push({
            title: video.title,
            component: VideoView,
            passProps: {
                video: video,
                navigator: this.props.navigator
            }
        });
    }
}
var data = [
        {image: require('image!videoScreenshot01'), title: "Introduce 3DS Mario", source: "Youtube - 06:32"},
        {image: require('image!videoScreenshot02'), title: "Emoji Among Us", source: "Vimeo - 3:34"},
        {image: require('image!videoScreenshot03'), title: "Seals Documentary", source: "Vine - 00:06"},
        {image: require('image!videoScreenshot04'), title: "Adventure Time", source: "Youtube - 02:39"},
        {image: require('image!videoScreenshot05'), title: "Facebook HQ", source: "Facebook - 10:20"},
        {image: require('image!videoScreenshot06'), title: "Lijiang Lugu Lake", source: "Allen - 20:30"}   
]

const styles = StyleSheet.create({
    listView: {
        
    },
    videoView: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iamge: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textView:{
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',  
    },
    voidoTitle: {
        fontFamily: 'Avenir Next',
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 18,
        backgroundColor: 'transparent'
    },
    voidoSource: {
        bottom: 10,
        paddingTop: 4,
        height: 14,
        fontFamily: 'Avenir Next',
        color: '#ffffff',
        fontSize: 10,
        backgroundColor: 'transparent',
        opacity: 0.5
    }
});

AppRegistry.registerComponent('PlayLocalVideo', () => PlayLocalVideo);
