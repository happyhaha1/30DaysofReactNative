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
  TouchableHighlight
} from 'react-native';

class CustomFont extends Component {
  
    render() {
    return (
        <NavigatorIOS
            style={{flex:1}}
            barTintColor={"#000000"}
            titleTextColor={"white"}
            initialRoute={{
                component: List,
                title: '自定义字体',
                passProps: {},
            }}
        />
    );
  }
}


class List extends Component{
    
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      fontRowIndex: 0,
      currentFontFamily: fontNames[0]
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
            <View style={{flex:1}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderView.bind(this)}
                    style={styles.listView}
                ></ListView> 
                <View style={styles.footer}>
                    <TouchableHighlight onPress={this._changeFont.bind(this)} underlayColor='transparent' activeOpacity={0.5}>
                        <View style={styles.footerBtn}>
                            <Text style={[styles.btnText]}>Change Font</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
    
    _changeFont(){
        var fontRowIndex = (this.state.fontRowIndex+1) % 3;
        this.setState({
            fontRowIndex: fontRowIndex,
            currentFontFamily: fontNames[fontRowIndex]
        })
    }
    
   renderView(text) {
    return (
      <View style={styles.container}>
            <Text style={{color: "white",fontSize: 16,fontFamily: this.state.currentFontFamily}}>{text}</Text>
      </View>
    );
  }
}


 const data = ["30 Days React native", 
 "这些字体特别适合打「奋斗」和「理想」", 
 "谢谢「造字工房」，本案例不涉及商业使用", 
 "使用到造字工房劲黑体，致黑体，童心体", 
 "呵呵，再见🤗 See you next Project", 
 "微博 @童lian话"]

const fontNames = 
["MFTongXin_Noncommercial-Regular", "MFJinHei_Noncommercial-Regular", "MFZhiHei_Noncommercial-Regular"]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  listView: {
    backgroundColor: '#000000',
  },
  footer: {
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerBtn: {
    bottom: 38,
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDE20B'
  },
  btnText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#080610'
  }

});

AppRegistry.registerComponent('CustomFont', () => CustomFont);
