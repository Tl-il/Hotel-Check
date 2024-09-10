import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import WelcomeNavigator from './WelcomeNavigator';
import AccuontNavigator from './AccuontNavigator';
import FeedNavigator from './FeedNavigator';

const Stack = createNativeStackNavigator();


const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeNavigator} />
        <Stack.Screen name="Feed" component={FeedNavigator} />
        <Stack.Screen name="Account" component={AccuontNavigator} />
        




    </Stack.Navigator>
)

export default AuthNavigator;