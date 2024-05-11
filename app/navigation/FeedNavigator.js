import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screen/HomeScreen";
import ListingDetiailsScreen from "../Screen/ListingDetiailsScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Feed" component={HomeScreen}   />
        <Stack.Screen name="ListingDetails" component={ListingDetiailsScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
    );
export default FeedNavigator;