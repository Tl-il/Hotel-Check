import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import LoginScreen from '../Screen/LoginScreen';
import NewPost from '../Screen/NewPost' ;
import CreateNewAccuont from '../Screen/CreateNewAccuont';
import ListingDetiailsScreen from '../Screen/ListingDetiailsScreen';
import FeedNavigator from './FeedNavigator';
import AccuontNavigator from './AccuontNavigator';
import {MaterialCommunityIcons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

const BarBottom = () => (
    <Tab.Navigator >

        <Tab.Screen
         name="Feed" 
         component={FeedNavigator}
         options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }} 
         /> 

        

        <Tab.Screen 
        name="Post" 
        component={NewPost} 
        options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus-circle" size={size+15} color={"blue"} />
            ),
          }} />  

        {/* <Tab.Screen 
        name="Login" 
        component={LoginScreen} />

        <Tab.Screen 
        name="New Accuont" 
        component={CreateNewAccuont} />

        <Tab.Screen 
        name="Lisit" 
        component={ListingDetiailsScreen} /> */}

<Tab.Screen
         name="Accounts" 
         component={AccuontNavigator} 
         options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" size={size} color={color} />
            ),
          }} />

    </Tab.Navigator>
);
export default BarBottom;

// להוסיף איקונים ליד השמות