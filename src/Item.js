import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'


const Item = ( { item } ) => {
    return (
            <View style={styles.Image_view}>
            <Image style={{ width:50, height:50,borderRadius:100 }} source={{uri:item.thumbnailUrl}} />
            <Text style={{marginLeft:10,fontWeight:'700'}}>{item.title}</Text>
            <Text>{item.body}</Text>  
           </View>
    )
};

const styles = StyleSheet.create({
 Image_view:{
    flex:1,
    padding:10,
    paddingHorizontal:15,
    marginTop:5,
    backgroundColor:'white',
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    marginLeft: 5,
    marginRight: 5
 }

})



export default Item;
