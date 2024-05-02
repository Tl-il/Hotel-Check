
import {StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Platform, Button, Dimensions, useWindowDimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from './app/Screen/WelcomeScreen';
import ViewImageScreen from './app/Screen/ViewImageScreen';
import { } from '@expo/vector-icons';
import AppButton from './app/component/Button/AppButton';
import colors from './app/config/colors';
import AppText from './app/component/AppText';
import LoginScreen from './app/Screen/LoginScreen';
import Crad from './app/component/ Crad';
import ListingDetiailsScreen from './app/Screen/ListingDetiailsScreen';
import MessagesScreen from './app/Screen/MessagesScreen';
import AppTextInput from './app/component/AppTextInput';
import{useState}from "react";
import CreateNewAccuont from './app/Screen/CreateNewAccuont';

export default function App() {
  return (
  // scrennn checking:

  //<ViewImageScreen></ViewImageScreen>

  //<WelcomeScreen></WelcomeScreen>
  
  //  <LoginScreen></LoginScreen>
  
  //<CreateNewAccuont></CreateNewAccuont>
  
  <MessagesScreen></MessagesScreen>
  
  //<ListingDetiailsScreen></ListingDetiailsScreen>




  // component checking:


  // <View style={{
  //     padding:20,
  //     paddingTop:100
  //   }}> 
  //   <Crad
  //   title={'הילטון'}
  //   subTitle={'1.5 km'}
  //   image={require("./app/assets/hotel2.png")}
  // />
  // </View>
  
  

  // <SafeAreaView>
  //   <AppTextInput placeholder="username"/>
  // </SafeAreaView> 
  
  
  
  //  <View style={{
  //   flex: 1,
  //   justifyContent:'center',
  //   alignItems:'center',
  //   }}
  //   >
  //     <AppButton title="login" onPress={()=>console.log("work")}/>
  //   </View>


  );
}

