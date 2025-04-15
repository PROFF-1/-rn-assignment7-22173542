import { FlatList, StyleSheet, Text, View,Image, Pressable,navigation, Button,Platform ,StatusBar, ActivityIndicator, TouchableOpacity} from 'react-native'
import {React, useState, useEffect} from 'react'
import Header from '../Components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default function Home({navigation}) {
  

  const[products, setProduct]= useState([])
  const [loading, setLoading]= useState(false)
  const [error, setError]= useState(null)

  useEffect(()=>{
      getData()
    },[]);


      const getData= async()=>{

        const URL= 'https://fakestoreapi.com/products'
        setLoading(true)
        try{

          const res = await fetch(URL)
          if(!res.ok){
            throw new Error('Error Fetching from API')
          }
           
          const data = await res.json()
          setProduct(data)
      }
      catch(error){
        console.log(error);
        setError(error.message)
      }finally{
          setLoading(false)
      }
        }
        
  return (




    <SafeAreaView style={styles.container}>


      
    {
      loading &&
      <View style={styles.loadingScreen}>
       
        <ActivityIndicator
        size={'large'}
        color={'red'}
        />
         <Text>Loading</Text>
      </View>
    }

    {
      error && 
      <View  style={styles.errorScreen}>
        <Text>
          {error.message}
        </Text>
        <TouchableOpacity onPress={getData}>
          <Text>Reload</Text>
        </TouchableOpacity>
      </View>
    }



    {
      !loading && !error &&
      (
        <>
         <Header/>
     <View style={styles.subHeaderContainer}>
        <Text style={styles.ourStory}>OUR STORY</Text>
        <View style={styles.headerRight}>
          <View style={styles.iconHolder}>
          <MaterialCommunityIcons name="format-list-checkbox" size={24} color="black" />
          </View>
          <View style={styles.iconHolder}>
          <Ionicons name="filter" size={24} color="black" />          
          </View>
        </View>
     </View>
      <View style={{marginBottom: 100}}>
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
              <View>

              
                <Text style={styles.price}>${item.price}</Text>
                <Pressable style={styles.add}>
                    <MaterialIcons name="add-circle-outline" size={24} color="black" />
                </Pressable>
              </View>
            </Pressable>
          )
        }}
        keyExtractor={(item)=>item.id}
        numColumns={2}
        style={{position:'relative'}}
        />
      </View>
        </>
      )
    }
    
   
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingTop: StatusBar.currentHeight
   
  },


  loadingScreen:{
    flex:1,
    backgroundColor:'#ddd',
    alignItems:'center',
    justifyContent:'center',
  },


  errorScreen:{
      paddingTop: 60,
      backgroundColor:'#ddd',
      alignItems:'flex-start',
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
    marginRight:10,
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
    color:'orange',
    marginRight: 100
  },

  description:{
    color:'grey'
  },


  descriptionContainer:{
    paddingHorizontal:10
  },


  subHeaderContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal: 20,
    paddingVertical:20
  },


  headerRight: {
    flexDirection:'row',
    alignItems:'center',
    width: '25%',
    justifyContent:'space-between'
  },


  iconHolder:{
    backgroundColor:'#eee',
    height:40,
    width:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:'50%'
  },


  ourStory:{
    fontSize: 30,
    fontWeight:'bold',
    letterSpacing:5
  },


  add:{
    height:35,
    width:35,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    bottom:0,
    right:0
  }
});

