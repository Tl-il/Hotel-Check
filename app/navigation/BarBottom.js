import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import NewPost from '../Screen/NewPost' ;
import CreateNewAccuont from '../Screen/CreateNewAccuont';
import FeedNavigator from './FeedNavigator';
import AccuontNavigator from './AccuontNavigator';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import MyPost from '../Screen/MyPost';
import WelcomeNavigator from './WelcomeNavigator';
import CrateHotels from '../Screen/CrateHotels';

const Tab = createBottomTabNavigator();

function BarBottom (){
    return(
    <Tab.Navigator screenOptions={{headerShown:false}} >

        <Tab.Screen
         name="Feed" 
         component={FeedNavigator}
         options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
            headerShown:false
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


        <Tab.Screen
         name="Account" 
         component={AccuontNavigator} 
         options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" size={size} color={color} />
            ),
          }} />

        {/* <Tab.Screen name="cery" component={CrateHotels}/> */}

    </Tab.Navigator>
    
        
);
}
export default BarBottom;

// להוסיף איקונים ליד השמות