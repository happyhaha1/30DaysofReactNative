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
  ListView,
  Dimensions
} from 'react-native';
import VisualView from './VisualView'

const { width,height } = Dimensions.get('window')

class CarouselEffect extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }
  
  componentDidMount() {
   
    this.setState({
          dataSource: this.state.dataSource.cloneWithRows(data),
    });
  }
  
  render() {
    return (
      <Image source={require('image!blue')} style={styles.container} rseizeMode='stretch'>
        <VisualView visualType="light" style={styles.container}>
            <View style={styles.listView}>
                <View style={styles.mainView}>
                    <ListView
                        style={{paddingRight: 20}}
                        dataSource={this.state.dataSource}
                        renderRow={this._pageView}
                        horizontal={true}
                        showsVerticalScrollIndicator={true}
                    /> 
                </View>
            </View>
        </VisualView>
    </Image>
    );
  }
  
  _pageView(interest) {
      return(
         <View style={[styles.cell,]}>
            <Image source={interest.image} style={styles.image} resizeMode='cover'>
                <VisualView visualType="extraLight" style={styles.textView}>
                    <Text style={styles.text}>{interest.text}</Text>
                </VisualView>
            </Image>
         </View>
      );
  }
}

const data = [
  {image: require('./images/hello.jpg'), description: "We love backpack and adventures! We walked to Antartica yesterday, and camped with some cute pinguines, and talked about this wonderful app idea. 🐧⛺️✨",text: 'Hello there, i miss u.'},
  {image: require('./images/dudu.jpg'), description: "We love backpack and adventures! We walked to Antartica yesterday, and camped with some cute pinguines, and talked about this wonderful app idea. 🐧⛺️✨",text: '🐳🐳🐳🐳🐳'},
  {image: require('./images/bodyline.png'), description: "We love backpack and adventures! We walked to Antartica yesterday, and camped with some cute pinguines, and talked about this wonderful app idea. 🐧⛺️✨",text: 'Training like this, #bodyline'},
  {image: require('./images/wave.jpg'), description: "We love backpack and adventures! We walked to Antartica yesterday, and camped with some cute pinguines, and talked about this wonderful app idea. 🐧⛺️✨",text: 'I\'m hungry, indeed.'},
  {image: require('./images/darkvarder.png'), description: "We love backpack and adventures! We walked to Antartica yesterday, and camped with some cute pinguines, and talked about this wonderful app idea. 🐧⛺️✨",text: 'Dark Varder, #emoji'},
  {image: require('./images/hhhhh.jpg'), description: "We love backpack and adventures! We walked to Antartica yesterday, and camped with some cute pinguines, and talked about this wonderful app idea. 🐧⛺️✨",text: 'I have no idea, bitch'}
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
      flex: 1,
  },
  cell: {
    marginLeft: 20,
    width: 300,
    height: 400,
    borderRadius: 7,
    overflow: 'hidden'
  },
  mainView: {
      width,
      marginTop: (95/500)*height,
      height: 450
  },
  image: {
    width: 300,
    height: 400
  },
  textView: {
    position: 'absolute',
    overflow: 'hidden',
    paddingLeft: 15,
    bottom: 0,
    width: 300,
    height: 60,
  },
  text: {
    fontSize: 16,
    color: '#333333',
    lineHeight: 40,
    fontFamily: 'Avenir Next'
  }
  
});

AppRegistry.registerComponent('CarouselEffect', () => CarouselEffect);
