import { StyleSheet, Text, View,SafeAreaView, Image, FlatList,StatusBar,TouchableOpacity, Pressable,Platform} from 'react-native'
import React, {useContext, useEffect, useState,useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import CartHeader from '../Components/CartHeader';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CartScreen() {




  const removeFromCart = async (id) => {
    try {
      await AsyncStorage.removeItem(`product-${id}`);
      fetchCartItems(); // Refresh list
    } catch (error) {
      console.log('Error removing item:', error);
    }
  };
  


  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const productKeys = keys.filter((key) => key.startsWith('product-'));
      const stores = await AsyncStorage.multiGet(productKeys);

      const items = stores.map(([key, value]) => JSON.parse(value));
      setCartItems(items);
    } catch (error) {
      console.log('Error loading cart:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchCartItems();
    }, [])
  );


  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={{width:'100%'}}>
      <CartHeader/>
      </View>
      
      <Text style={styles.checkoutText}>CHECKOUT</Text>
      <Text style={styles.underline}>_____________________________</Text>
      <View style={{marginBottom: Platform.OS === 'ios'? 60: 90}}>
        <FlatList
        
         data={cartItems}
        renderItem={({item})=>{
          return(
            <View >
            <View style={styles.cartItem}>
              <Image source={{uri:item.image}} style={{height:150, width:150}} resizeMode='contain'/>
              <View style={{width: 250}}>
                <Text style={styles.cartegory}>
                {item.category}
                </Text>
                <Text numberOfLines={3} style={styles.description}>
                {item.title}
                </Text>
              <Text style={styles.price}>
                $ {item.price}
              </Text>
              </View> 
            </View>
            <MaterialIcons name="highlight-remove" size={24} color="red"  style={styles.remove}
            onPress={()=>removeFromCart(item.id)}
            />
            </View>
          )
        }}
        />
        <View style={styles.amountContainer}>
          <Text style={styles.estTotal}>EST. TOTAL</Text>
          <Text style={styles.calculatedTotal}>${calculateTotal()} </Text>
        </View>

         <Pressable style={styles.checkout}>
           <Image source={require('../assets/shopping bag.png')}
           
            tintColor='white'
            style={{height:34, width:34,marginRight: 15}}
           />
           <Text style={{color:'white', fontSize:24, fontWeight:'bold'}}>CHECKOUT</Text>
         </Pressable>
      </View>
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: StatusBar.currentHeight,
      alignItems:'center'
     
    },


    cartItem:{
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:'white',
      paddingVertical:10,
      marginVertical: 10
      
    },


    amountContainer:{
     flexDirection:'row',
     height:50,
     paddingHorizontal: 25,
     justifyContent:'space-between',
     alignItems: 'center'
    },

    cartegory:{
      fontWeight:'bold',
      fontSize: 18,
      marginVertical:3
    },

    price:{
      fontSize:16,
      fontWeight:'bold',
      color:'orange',
      marginRight: 100
    },

    estTotal:{
      fontSize: 20,
      fontWieght: 'bold'
    },
  
    description:{
      color:'grey'
    },


    checkoutText:{
      fontWeight:'bold',
      fontSize: 16,
      letterSpacing:3,
      marginTop: 10
    },

    underline:{
      color:'red',
      fontSize:18,
      fontWeight:'bold',
      marginTop: -10
    },

    remove:{
      position:'absolute',
      bottom:20,
      right:30
    },

    checkout:{
      width: 450,
      height: Platform.OS==='ios'?100: 80,
      paddingBottom: Platform.OS ==='ios'? 20:0,
      backgroundColor:'black',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row'
    },


    calculatedTotal:{
      color:'orange',
      fontSize: 24,
    }
})