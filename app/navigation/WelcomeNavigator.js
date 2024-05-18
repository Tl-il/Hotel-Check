import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import WelcomeScreen from '../Screen/WelcomeScreen';
import LoginScreen from '../Screen/LoginScreen';
import CreateNewAccuont from '../Screen/CreateNewAccuont';
import navigationTheme from './navigationTheme';


const Stack = createNativeStackNavigator();

const WelcomeNavigator =()=> (
    
        <Stack.Navigator>
            <Stack.Screen name="logOut" component={WelcomeScreen} options={{headerShown:false }}/>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="New Accuont" component={CreateNewAccuont} />
        </Stack.Navigator>
)

export default WelcomeNavigator;