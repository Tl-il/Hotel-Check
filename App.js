
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Platform, Button, Dimensions, useWindowDimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from './app/Screen/WelcomeScreen';
import ViewImageScreen from './app/Screen/ViewImageScreen';
import { } from '@expo/vector-icons';
import AppButton from './app/component/Button/AppButton';
import colors from './app/config/colors';
import AppText from './app/component/AppText';
import LoginScreen from './app/Screen/LoginScreen';




export default function App() {
  return (
   <View style={{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    }}
    >
      <AppButton title="login" onPress={()=>console.log("work")}/>
    </View>
  // <ViewImageScreen></ViewImageScreen>
   //<WelcomeScreen></WelcomeScreen>

 //<LoginScreen></LoginScreen>
    
  );
}

