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
  ListView,
  RefreshControl
} from 'react-native';

const favoriteEmoji = ["🤗🤗🤗🤗🤗", "😅😅😅😅😅", "😆😆😆😆😆"]
const newFavoriteEmoji = ["🏃🏃🏃🏃🏃", "💩💩💩💩💩", "👸👸👸👸👸", "🤗🤗🤗🤗🤗", "😅😅😅😅😅", "😆😆😆😆😆" ]

class PullToRefresh extends Component {
    
  constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            isRefreshing: false,
            oldData: favoriteEmoji
        };
   }  
  
   componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(favoriteEmoji)
        });
   }
  
  render() {
    return (
      <View style={styles.container}>
           <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderView.bind(this)}
                style={styles.listView}
                refreshControl={
                    <RefreshControl
                        style={styles.refreshView}
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        tintColor='#ffffff'
                        fontColor='#ffffff'
                        title={'Last Update at ' + new Date().toString()}
                        colors={['#ffffff', '#ffffff', '#ffffff']}
                        progressBackgroundColor='#ffffff'
                />}
           ></ListView> 
      </View>
    );
  }
  
  
  _onRefresh(){
       this.setState({isRefreshing: true})
       const newData = newFavoriteEmoji.concat(this.state.oldData);
       setTimeout(() => {
           this.setState({
               oldData: newData,
               isRefreshing: false,
               dataSource: this.state.dataSource.cloneWithRows(newData)
           })
       },2000);
       
  }
  renderView(data){
      return(
      <View style={styles.row}>
          <Text style={styles.text}>{data}</Text>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16141B'
  },
  row: {
    padding: 20,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 50
  },
  refreshView: {
    backgroundColor: 'rgb(29,29,37)',
  }
  
});

AppRegistry.registerComponent('PullToRefresh', () => PullToRefresh);
