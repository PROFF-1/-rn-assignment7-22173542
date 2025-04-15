import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import DetailsHeader from '../Components/DetailsHeader'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function Blog() {
  return (
    <SafeAreaView style={{paddingTop:StatusBar.currentHeight, backgroundColor:'#ddd', flex:1}}>
      <DetailsHeader/>
      <View style={{flex:1,alignItems:'center', justifyContent:'center', backgroundColor:'white'}}>
        <Text>Blog</Text>
      </View>
      
      <StatusBar/>
    </SafeAreaView>
   
  )
}

