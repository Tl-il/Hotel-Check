import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import WelcomeScreen from '../Screen/WelcomeScreen';
import LoginScreen from '../Screen/LoginScreen';
import CreateNewAccuont from '../Screen/CreateNewAccuont';
import navigationTheme from './navigationTheme';
import BarBottom from './BarBottom';


const Stack = createNativeStackNavigator();

const WelcomeNavigator =()=> (
    
        <Stack.Navigator>
            <Stack.Screen name="logOut" component={WelcomeScreen} options={{headerShown:false }}/>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="New Accuont" component={CreateNewAccuont} />
            <Stack.Screen name="Home" component={BarBottom}/>
            <Stack.Screen name="Feed" component={BarBottom}/>
            <Stack.Screen name="Post" component={BarBottom}/>
            
        </Stack.Navigator>
)

export default WelcomeNavigator;