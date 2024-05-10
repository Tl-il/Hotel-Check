import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../Screen/HomeScreen';
import AccountScreen from '../Screen/AccountScreen';
import LoginScreen from '../Screen/LoginScreen';
import WelcomeScreen from '../Screen/WelcomeScreen';
import NewPost from '../Screen/NewPost' ;


const Tab = createBottomTabNavigator();

const BarBottom = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} /> 
        <Tab.Screen name="Account" component={AccountScreen} />
        <Tab.Screen name="Post" component={NewPost} />  
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Welcome" component={WelcomeScreen} />


    </Tab.Navigator>
)
export default BarBottom;

// להוסיף איקונים ליד השמות