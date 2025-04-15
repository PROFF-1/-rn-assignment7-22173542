import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from '../Screens/Home'
import ProductDetails from '../Screens/ProductDetails';
import Blog from '../Screens/Blog';
import Clothing from '../Screens/Clothing';
import Electronic from '../Screens/Electronic';
import Jewelery from '../Screens/Jewelery';
import Location from '../Screens/Locations';


const Stack = createStackNavigator();




export default function AppStack(){
  return(
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} 
        options={{headerShown:false}} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} 
        options={{headerShown:false}}/>
        <Stack.Screen name="Blog" component={Blog} 
        options={{headerShown:false}}/>
        <Stack.Screen name="Location" component={Location} 
        options={{headerShown:false}}/>
        <Stack.Screen name="Clothing" component={Clothing} 
        options={{headerShown:false}}/>
        <Stack.Screen name="Jewelery" component={Jewelery} 
        options={{headerShown:false}}/>
        <Stack.Screen name="Electronic" component={Electronic} 
        options={{headerShown:false}}/>
      </Stack.Navigator>
    )
}

