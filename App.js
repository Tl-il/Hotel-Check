
import {TextInput,StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Platform, Button, Dimensions, useWindowDimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from './app/Screen/WelcomeScreen';
import ViewImageScreen from './app/Screen/ViewImageScreen';
import {MateriaCommunityIcons } from '@expo/vector-icons';
import AppButton from './app/component/Button/AppButton';
import colors from './app/config/colors';
import AppText from './app/component/AppText/index'
import LoginScreen from './app/Screen/LoginScreen';
import Crad from './app/component/ Crad';
import ListingDetiailsScreen from './app/Screen/ListingDetiailsScreen';
import MessagesScreen from './app/Screen/MessagesScreen';
import AppTextInput from './app/component/AppTextInput';
import react,{useState} from 'react';
import CreateNewAccuont from './app/Screen/CreateNewAccuont';
import Icon from './app/component/Icon';
import Screen from './app/component/Screen';
import ListItem from './app/component/ListItem';
import AccountScreen from './app/Screen/AccountScreen';
import HomeScreen from './app/Screen/HomeScreen';
import AppPicker from './app/component/AppPicker';
import { firebaseConfig } from "./app/firebase";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';


//navigation:
const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
  </Screen>
);

const TweetDetails = () => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
);
 const Stack = createNativeStackNavigator();
 const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
 )

// const categories=[
//   {label:"דירוג",value:1},
//   {label:"מרחק",value:2},
//   {label:"מתקנים",value:3},
// ]; //picker

export default function App() {
  // const [category,setCategory]=useState(); //picker
  return (
//navigation:
<NavigationContainer>
<AuthNavigator/>
</NavigationContainer>



  // scrennn checking:

  //<ViewImageScreen></ViewImageScreen>

  //<WelcomeScreen></WelcomeScreen> 
  
 // <LoginScreen></LoginScreen>
  
  //<CreateNewAccuont></CreateNewAccuont>

  //<HomeScreen></HomeScreen>
  
  //<ListingDetiailsScreen></ListingDetiailsScreen>
  
  //<AccountScreen></AccountScreen>

  //<MessagesScreen></MessagesScreen>
   
  
  




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

//  <Screen>
// <ListItem title='hii' subTitle='slom'
// IconComponent={< Icon 
// name="email" 
// size={50} 
// backgroundColor='black'/>} />
//  </Screen>


//  <Screen>
//   <AppPicker
//   selectedItem={category}
//   onSelectItem={item=>setCategory(item)}
//    items={categories} icon="apps" Placeholder='category'/>
//   <AppTextInput icon="email" placeholder="email" />
//  </Screen> //picker






//navigation checking:




  );
}

