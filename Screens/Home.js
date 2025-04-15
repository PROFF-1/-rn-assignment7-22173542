import { FlatList, StyleSheet, Text, View,Image, Pressable,navigation, Button,Platform ,StatusBar} from 'react-native'
import {React, useState, useEffect} from 'react'
import Header from '../Components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Home({navigation}) {
  

  const[products, setProduct]= useState([])

  useEffect(()=>{
      getData()
    },[]);

  const getData=()=>{
      const URL= 'https://fakestoreapi.com/products'
      fetch(URL)
        .then((res)=>{
          if(!res.ok){
            throw new Error('Error Fecthing From Api')
          }
          return res.json();  
        })
          .then((data)=>{

          setProduct(data)
          }
      )
      .catch((error)=>{
          console.log(error.message)
        })
      }
  return (
    <SafeAreaView style={styles.container}>


     <Header/>
      <View>
        <FlatList
        data={products}
        renderItem={({item})=>{
          return(
            <Pressable onPress={()=>navigation.navigate('ProductDetails',{
              category: item.category,
              title: item.title,
              image: item.image,
              price: item.price,
              category: item.category,
            }) } style={styles.itemContainer}>
              
              <Image source={{uri: item.image}} 
              style={styles.photo}
              resizeMode='contain'
              
              />
              <Text style={styles.cartegory}>{item.category}</Text>
              <View  style={styles.descriptionContainer}>
                <Text style={styles.description} numberOfLines={3}>{item.title}</Text>
              </View>
              <Text style={styles.price}>${item.price}</Text>
            </Pressable>
          )
        }}
        keyExtractor={(item)=>item.id}
        numColumns={2}
        
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingTop: StatusBar.currentHeight
   
  },
  photo:{
    width:'80%',
    height:250
  },


  itemContainer:{
    backgroundColor:'#fff',
    alignItems:'center',
    width:'50%',
    marginBottom:30,
    marginRight:10
  },


  cartegory:{
    fontWeight:'bold',
    fontSize: 18,
    marginVertical:10
  },

  price:{
    fontSize:20,
    fontWeight:'bold',
    marginVertical:10,
    color:'orange'
  },

  description:{
    color:'grey'
  },


  descriptionContainer:{
    paddingHorizontal:10
  }
});

