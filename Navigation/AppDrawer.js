import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';
import AppStack from './AppNavigation';
import Locations from '../Screens/Locations'
import Blog from '../Screens/Blog'
import Jewelery from '../Screens/Jewelery'
import Electronic from '../Screens/Electronic'
import Clothing from '../Screens/Clothing'
import CartScreen from '../Screens/CartScreen';
import { Pressable } from 'react-native-gesture-handler';



const Drawer = createDrawerNavigator();

export default function AppDrawer() {

  

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Store"
       drawerContent={(props)=>{

        const {routeNames, index}= props.state
        const focused = routeNames[index];
        return(
          <DrawerContentScrollView {...props}>
            <Pressable  style={styles.close} onPress={()=>{props.navigation.closeDrawer()}}>
              <Image source={require('../assets/Close.png')}
              
               tintColor={'black'}
              />
            </Pressable>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>ERIC ATSU</Text>
              <Text style={styles.underline}>____________</Text>
            </View>
            <DrawerItem
             label="Store"
              onPress={() => props.navigation.navigate('Store')}
              focused={focused === 'Store'}
              activeTintColor='white' 
              activeBackgroundColor='red'
              style={styles.drawerItems}
            />
            <DrawerItem
             label="Location"
              onPress={() => props.navigation.navigate('Location')}
              focused={focused === 'Location'}
              activeTintColor='white' 
              activeBackgroundColor='red'
              style={styles.drawerItems}
            />
            <DrawerItem
             label="Blog"
              onPress={() => props.navigation.navigate('Blog')}
              focused={focused === 'Blog'}
              activeTintColor='white' 
              activeBackgroundColor='red'
              style={styles.drawerItems}
            />
            <DrawerItem
             label="Jewelery"
              onPress={() => props.navigation.navigate('Jewelery')}
              focused={focused === 'Jewelery'}
              activeTintColor='white' 
              activeBackgroundColor='red'
              style={styles.drawerItems}
            />
            <DrawerItem
             label="Electronic"
              onPress={() => props.navigation.navigate('Electronic')}
              focused={focused === 'Electronic'}
              activeTintColor='white' 
              activeBackgroundColor='red'
              style={styles.drawerItems}
            />
            <DrawerItem
             label="Clothing"
              onPress={() => props.navigation.navigate('Clothing')}
              focused={focused === 'Clothing'}
              activeTintColor='white' 
              activeBackgroundColor='red'
              style={styles.drawerItems}
            />
            <DrawerItem
             label="Cart"
              onPress={() => props.navigation.navigate('Cart')}
              focused={focused === 'Cart'}
              activeTintColor='white' 
              activeBackgroundColor='red'
              style={styles.drawerItems}
            />
          </DrawerContentScrollView>
        )
       }}
      >
        <Drawer.Screen name="Store" component={AppStack}  options={{headerShown:false}}/>
        <Drawer.Screen name='Location' component={Locations} options={{headerShown:false}}/>
        <Drawer.Screen name='Blog' component={Blog} options={{headerShown:false}}/>
        <Drawer.Screen name='Jewelery' component={Jewelery} options={{headerShown:false}}/>
        <Drawer.Screen name='Electronic' component={Electronic} options={{headerShown:false}}/>
        <Drawer.Screen name='Clothing' component={Clothing} options={{headerShown:false}}/>
        <Drawer.Screen name='Cart' component={CartScreen} options={{headerShown:false}}/>
      </Drawer.Navigator>
    <StatusBar style='dark' />
    </NavigationContainer>
   
  )
}



const styles = StyleSheet.create({

  nameContainer:{
    padding:15
  },


  name:{
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing:5
  
  },


  underline:{
    color:'red',
    fontWeight:'bold',
    fontSize: 20
  },

  close:{
    height: 50,
    width:50
  },



  drawerItems:{
    color:'green'
  }
})


