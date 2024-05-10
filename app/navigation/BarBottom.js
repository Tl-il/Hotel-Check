import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../Screen/HomeScreen';
import AccountScreen from '../Screen/AccountScreen';

const Tab = createBottomTabNavigator();

const BarBottom = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
)
export default BarBottom;