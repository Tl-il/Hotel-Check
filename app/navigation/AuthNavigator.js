import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import WelcomeScreen from '../Screen/WelcomeScreen';
import LoginScreen from '../Screen/LoginScreen';
import CreateNewAccuont from '../Screen/CreateNewAccuont';
import HomeScreen from '../Screen/HomeScreen';
import ViewImageScreen from '../Screen/ViewImageScreen';
import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue';
import ListingDetiailsScreen from '../Screen/ListingDetiailsScreen';
import AccountScreen from '../Screen/AccountScreen';


const Stack = createNativeStackNavigator();
 

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="New Accuont" component={CreateNewAccuont} />
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} /> */}





    </Stack.Navigator>
)

export default AuthNavigator;