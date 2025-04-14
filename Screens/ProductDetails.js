import { StyleSheet, Text, View,Image,StatusBar } from 'react-native'
import React from 'react'
import Header from '../Components/Header';

export default function ProductDetails({route}) {
  const {category, title, image, price} = route.params;
  return (
    
    <View style={styles.container}>
      <Header/>
      <Image source={{uri:image}}
      style={styles.Photo}
      resizeMode='contain'
      />
      <View style ={styles. titleContainer}>
      <Text style={styles.category}>{category}</Text>
      <Image
      source={require('../assets/Export.png')}/>
      </View>
      
      <Text>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <StatusBar/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:StatusBar.currentHeight
   
  },

  Photo:{
    height:'60%',
    width:'100%'
  },
  price:{
    color:'orange'
  },

  titleContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:15,
    paddingVertical:15
  },

  category:{
    fontSize:28,
    fontWeight:'bold',
  }
});