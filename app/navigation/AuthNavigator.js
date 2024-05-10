import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../Screen/LoginScreen';
import WelcomeScreen from '../Screen/WelcomeScreen';
import CreateNewAccuont from '../Screen/CreateNewAccuont';
import HomeScreen from '../Screen/HomeScreen';

const Stack = createNativeStackNavigator();
 

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="New Accuont" component={CreateNewAccuont} />
        <Stack.Screen name="Home" component={HomeScreen} />
        
    </Stack.Navigator>
)

export default AuthNavigator;