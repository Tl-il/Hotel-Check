
import { StyleSheet, Text, View,Image,SafeAreaView,StatusBar,Platform,Button, Dimensions, useWindowDimensions} from 'react-native';
import{useDimensions,useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from './app/Screen/WelcomeScreen';

export default function App() {
  return (
<WelcomeScreen></WelcomeScreen>
  );
}

