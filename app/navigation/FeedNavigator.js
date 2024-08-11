import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screen/HomeScreen";
import ListingDetiailsScreen from "../Screen/ListingDetiailsScreen";
import NewPost from "../Screen/NewPost";
import {colors} from '../config/colors';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator screenOptions={ { 
        headerShown: false,
        headerStyle:{backgroundColor:'#e8e5dc'},
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ListingDetails" component={ListingDetiailsScreen} options={{title:'HOME',headerShown: true }} />
        <Stack.Screen name="new post" component={NewPost} options={{ headerShown: false }} />
    </Stack.Navigator>
);
export default FeedNavigator;