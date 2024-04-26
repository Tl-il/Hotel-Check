
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Platform, Button, Dimensions, useWindowDimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from './app/Screen/WelcomeScreen';
import ViewImageScreen from './app/Screen/ViewImageScreen';
import { } from '@expo/vector-icons';
import AppButton from './app/component/Button/AppButton';





export default function App() {
  return (
   <View style={{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    }}
    >
      <AppButton title="Login" onPress={()=>console.log("work")}/>
    </View>
  );
}

