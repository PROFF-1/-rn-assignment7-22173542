import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function CartHeader() {

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
        <View>
         <MaterialIcons name="store" size={34} color="black" />
        </View>
        <View>
         <Text style={styles.the}>The</Text>
         <Text style={styles.conerStore}>cornerStore</Text>
        </View>
        
      </View>
      <View style={styles.headerRight}>
        <Image source={require('../assets/Search.png')}
        style={{height:35, width:35, marginLeft:30}}/>
      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({


  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:15,
    paddingVertical:10,
    backgroundColor:'#fff'
  },

  the:{
    fontWeight:'bold',
    fontSize: 15,
  },

  conerStore:{
    fontWeight:'bold',
    fontSize:24,
    marginTop:-10

  },

  name:{
    marginLeft:40,
    paddingHorizontal:5,
    borderLeftWidth:3,
    borderLeftColor:'red',
    borderBottomLeftRadius:15,
    flexDirection:'row'
  },

  headerRight:{
    flexDirection:'row',
    width: '20%',
    alignItems:'center',
    justifyContent:'space-between'
  }
})