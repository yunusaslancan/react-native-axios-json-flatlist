/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';
import Item from './src/Item';
export default class app extends React.Component
{
  constructor(){
    super();
    this.state = {
      data:[]
    }
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((res)=>{
      this.setState({data:res.data})
    })
    .catch((e)=>
    {
      console.log(e)
    })
  }
  _renderItem = ({item}) => {
    return<Item item={item}/> 
 }
 
  render()
  {
    const { data } = this.state;
    return (
      <SafeAreaView>
        <View style={{padding:20,justifyContent:'center',alignItems:'center'}}>
         <Text style={{fontWeight:'700',fontSize:20}}>Profile</Text>
        </View>
        <FlatList
        style={{backgroundColor:'#f5f5f5', padding:5 }}
           data={data}
           numColumns={1}
           keyExtractor={(item) =>item.id.toString()}
           renderItem={this._renderItem}
        />
      </SafeAreaView>
    )
  }
}