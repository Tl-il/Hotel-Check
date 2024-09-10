<<<<<<< HEAD
=======

import {TextInput,StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Platform, Button, Dimensions, useWindowDimensions } from 'react-native';
import { firebaseConfig } from "./app/firebase";
>>>>>>> 67ba0d3f (main)
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
<<<<<<< HEAD
import WelcomeNavigator from './app/navigation/WelcomeNavigator';

export default function App() {
  
  return (
   
=======
import BarBottom from './app/navigation/BarBottom';
import WelcomeNavigator from './app/navigation/WelcomeNavigator';




export default function App() {
  
  return (
  

>>>>>>> 67ba0d3f (main)
    <NavigationContainer theme={navigationTheme}>
      <WelcomeNavigator/>
    </NavigationContainer>

<<<<<<< HEAD
=======

>>>>>>> 67ba0d3f (main)
  );
}

