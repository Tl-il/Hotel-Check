import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from '../Screen/AccountScreen';
import MessagesScreen from '../Screen/MessagesScreen';

const Stack = createNativeStackNavigator();

const AccuontNavigator =()=>  (
    <Stack.Navigator >
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
        
    );
export default AccuontNavigator;