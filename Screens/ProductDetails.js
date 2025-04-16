import { StyleSheet, Text, View,Image,StatusBar,SafeAreaView, TouchableOpacity} from 'react-native'
import React ,{useState,useContext}from 'react'
import DetailsHeader from '../Components/DetailsHeader';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import  {DataContext} from '../DataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ProductDetails({route}) {
  const {setProductData}= useContext(DataContext)
  
  const {category, title, image, price} = route.params;


  // const handleAddToCart = async () => {
  //   const item = { id, category, title, image, price };
  //   try {
  //     const existingCart = await AsyncStorage.getItem('cart');
  //     const cart = existingCart ? JSON.parse(existingCart) : [];
      
  //     cart.push(item);
      
  //     await AsyncStorage.setItem('cart', JSON.stringify(cart));
      
  //     // Update context state
  //     setProductData(prevData => ({
  //       ...prevData,
  //       cart: cart // Update cart in context
  //     }));
      
  //     console.log('Product added to cart:', item.title);
  //   } catch (error) {
  //     console.log('Error adding product to cart:', error);
  //   }
  // };

  const instructions=[
    {

    id:'1',
    name:'Do not use bleach',
    image:require('../assets/Do Not Bleach.png')
    },
    {
      id:'2',
      name:'Do not tumble dry',
      image:require('../assets/Do Not Tumble Dry.png')
    },
    {
      id:'3',
      name:'Dry clean with tetrachloroethylene',
      image:require('../assets/Do Not Wash.png')
    },
    {
      id:'4',
      name:'Iron at a maximum of 110C/230F',
      image:require('../assets/Iron Low Temperature.png')
    }
]
return (
  <SafeAreaView style={styles.container}>
    <DetailsHeader />
    <ScrollView nestedScrollEnabled={false}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.Photo} resizeMode="contain" />
      </View>
      <View style={styles.details}>
        <View style={styles.titleContainer}>
          <Text style={styles.category}>{category}</Text>
          <Image source={require('../assets/Export.png')} />
        </View>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.materials}>M A T E R I A L S</Text>
        <Text style={styles.message}>
          We work with monitoring programmes to ensure compliance with safety, health and quality standards for our
          products.
        </Text>

        <View style={styles.instructionsContainer}>
          <FlatList
            data={instructions}
            renderItem={({ item }) => {
              return (
                <View style={styles.instructions}>
                  <Image source={item.image} style={{ height: 35, width: 35, marginRight: 10 }} tintColor="#555" />
                  <Text style={styles.instructionText}>{item.name}</Text>
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>

        <View style={styles.delieveryContainer}>
          <View style={styles.delieveryLeft}>
            <Image source={require('../assets/Shipping.png')} style={{ height: 35, width: 35, marginRight: 10 }} />

            <View>
              <Text style={styles.delieveryTitle}>Free Flat Rate Shipping</Text>
              <Text style={styles.delieveryText}>Estimated to be delivered on</Text>
              <Text style={styles.instructionText}>09/05/2025-12/05/2025</Text>
            </View>
          </View>
          <View>
            <Image source={require('../assets/Up.png')} />
          </View>
        </View>
      </View>
    </ScrollView>
    <View style={styles.addToCart}>
      <View style={styles.addToCartLeft}>
        <TouchableOpacity>
          <Image
            source={require('../assets/Plus.png')}
            tintColor={'white'}
            style={{ height: 40, width: 40 }}
          />
        </TouchableOpacity>
        <Text style={styles.addToBasket}>ADD TO BASKET</Text>
      </View>
      <Image
        source={require('../assets/Heart.png')}
        tintColor={'white'}
        style={{ height: 40, width: 40 }}
      />
    </View>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:StatusBar.currentHeight
   
  },


  imageContainer:{
    backgroundColor:'white',
    width:'100%',
    height:350,
    paddingVertical:20
  },

  Photo:{
    height:'100%'
  },
  price:{
    color:'orange',
    fontWeight:'bold',
    fontSize:28,
    marginBottom:10
  },

  title:{
  fontSize:18,
  color: 'grey',
  marginBottom :15
  },

  titleContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:15
  },

  details:{
    paddingHorizontal:25
  },
  category:{
    fontSize:28,
    fontWeight:'bold',
  },
  
  materials:{
    fontSize:18,
    fontWeight:'bold',
    marginVertical:5
  },

  message:{
    fontSize:16,
    color:'grey',
    marginVertical:5,
    lineHeight:20
  },

  instructions:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:10

  },


  instructionText:{
    fontSize:16,
    color:'grey'
  },

  instructionsContainer:{
    borderBottomWidth:2,
    borderBottomColor:'#888',
    height:250,
    marginBottom: 30
  },


  delieveryContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start',
    marginBottom:50
  },


  delieveryLeft:{
    flexDirection:'row'
  },

  delieveryTitle:{
    fontSize:18,
    fontWeight:'bold',
  },


  delieveryText:{
    color:'grey',
    marginVertical:10,
    fontSize:16
  },
  
  addToCart:{
    backgroundColor:'black',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal: 20,
    paddingVertical:20
  },

  addToBasket:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  },


  addToCartLeft:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'55%',
  }
});