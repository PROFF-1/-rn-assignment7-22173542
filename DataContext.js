import { StyleSheet, Text, View } from 'react-native'
import {useContext, useState, React, createContext} from 'react'


export const DataContext =createContext()

export const DataProvider =({children}) => {

  const [productData, setProductData] = useState([]);

  return (
    <DataContext.Provider value={{productData, setProductData}}>
      {children}
    </DataContext.Provider>
  )
}

