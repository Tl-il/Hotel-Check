
import { StyleSheet, Text, View,Image,SafeAreaView,StatusBar,Platform,Button, Dimensions, useWindowDimensions} from 'react-native';
import{useDimensions,useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from './app/Screen/WelcomeScreen';
import ViewImageScreen from './app/Screen/ViewImageScreen';

export default function App() {
  return (
<ViewImageScreen></ViewImageScreen>
  );
}

