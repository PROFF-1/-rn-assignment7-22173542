import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from '../Screens/Home'
import ProductDetails from '../Screens/ProductDetails';


const Stack = createStackNavigator();




export default function AppStack(){
  return(
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} 
        options={{headerShown:false}}/>
      </Stack.Navigator>
    )
}

