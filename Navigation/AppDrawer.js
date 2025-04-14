import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppStack from './AppNavigation';
import Locations from '../Screens/Locations'
import Blog from '../Screens/Blog'
import Jewelery from '../Screens/Jewelery'
import Electronic from '../Screens/Electronic'
import Clothing from '../Screens/Clothing'



const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Store">
        <Drawer.Screen name="Store" component={AppStack}  options={{headerShown:false}}/>
        <Drawer.Screen name='Location' component={Locations} options={{headerShown:false}}/>
        <Drawer.Screen name='Blog' component={Blog} options={{headerShown:false}}/>
        <Drawer.Screen name='Jewelery' component={Jewelery} options={{headerShown:false}}/>
        <Drawer.Screen name='Electronic' component={Electronic} options={{headerShown:false}}/>
        <Drawer.Screen name='Clothing' component={Clothing} options={{headerShown:false}}/>
      </Drawer.Navigator>
    <StatusBar style="auto" />
    </NavigationContainer>
   
  )
}



