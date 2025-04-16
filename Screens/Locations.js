import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import  Header from '../Components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function Location() {
  return (
    <SafeAreaView style={{ backgroundColor:'#fff', flex:1}}>
      <Header/>
      <View style={{flex:1,alignItems:'center', justifyContent:'center', backgroundColor:'white'}}>
        <Text>Location</Text>
      </View>
      
      <StatusBar/>
    </SafeAreaView>
   
  )
}

