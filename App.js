
import {TextInput,StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Platform, Button, Dimensions, useWindowDimensions } from 'react-native';
import { firebaseConfig } from "./app/firebase";
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import BarBottom from './app/navigation/BarBottom';
import WelcomeNavigator from './app/navigation/WelcomeNavigator';




export default function App() {
  
  return (
  

    <NavigationContainer theme={navigationTheme}>
      <WelcomeNavigator/>
    </NavigationContainer>


  );
}

