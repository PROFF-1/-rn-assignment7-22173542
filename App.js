import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  AppDrawer from './Navigation/AppDrawer';
import  {DataProvider}  from './DataContext';


export default function App() {
  return (
    <DataProvider>
      < AppDrawer/>
    </DataProvider>
  );
}