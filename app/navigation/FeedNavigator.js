import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screen/HomeScreen";
import ListingDetiailsScreen from "../Screen/ListingDetiailsScreen";
import NewPost from "../Screen/NewPost";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ListingDetails" component={ListingDetiailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="new post" component={NewPost} options={{ headerShown: false }} />
    </Stack.Navigator>
);
export default FeedNavigator;