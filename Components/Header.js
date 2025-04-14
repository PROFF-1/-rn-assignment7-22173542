import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Header() {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{
        navigation.openDrawer()
      }}>
        <Image source={require('../assets/Menu.png')}
          tintColor='black'/>
      </TouchableOpacity>
      <View style={styles.name}>
        <Text style={styles.the}>The</Text>
        <Text style={styles.conerStore}>cornerStore</Text>
      </View>
      <View style={styles.headerRight}>
        <Image source={require('../assets/Search.png')}
        style={{height:35, width:35}}/>
        <Image source ={require('../assets/shopping bag.png')}
        style={{height:35, width:35}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({


  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:10,
    paddingBottom:10
  },

  the:{
    fontWeight:'bold',
    fontSize: 15,
    marginBottom:-5
  },

  conerStore:{
    fontWeight:'bold',
    fontSize:24,
    marginTop:-10

  },

  name:{
    paddingHorizontal:5,
    borderLeftWidth:3,
    borderBottomWidth:4,
    borderLeftColor:'red',
    borderBottomColor:'red',
    borderBottomLeftRadius:15
  },

  headerRight:{
    flexDirection:'row',
    width: '20%',
    alignItems:'center',
    justifyContent:'space-between'
  }
})