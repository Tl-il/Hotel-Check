import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from '../Screen/AccountScreen';
import MessagesScreen from '../Screen/MessagesScreen';
import WelcomeNavigator from './WelcomeNavigator';



const Stack = createNativeStackNavigator();

const AccuontNavigator =()=>  (
    <Stack.Navigator screenOptions={{headerShown:false}}  >
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
         <Stack.Screen name="Welcome" component={WelcomeNavigator} />
    </Stack.Navigator>
        
    );
export default AccuontNavigator;