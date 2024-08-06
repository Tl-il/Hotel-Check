import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import WelcomeScreen from '../Screen/WelcomeScreen';
import LoginScreen from '../Screen/LoginScreen';
import CreateNewAccuont from '../Screen/CreateNewAccuont';
import navigationTheme from './navigationTheme';
import EditProfileScreen from '../Screen/EditProfileScree';
import BarBottom from './BarBottom';
import MyPost from '../Screen/MyPost';
import EditPost from '../Screen/EditPost';
import TestPage from '../Screen/TestPage';
import ListingDetiailsScreen from '../Screen/ListingDetiailsScreen';
import NewPost from '../Screen/NewPost';
import { getAuth, onAuthStateChanged } from 'firebase/auth';



const Stack = createNativeStackNavigator();
const WelcomeNavigator =()=> {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);
  
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const auth = getAuth();
      const subscriber = onAuthStateChanged(auth, onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    // if (initializing) return <TestPage />; //לבדוק בהמשך אם צריך את הדף הזה?!  

    return(
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:true}} />
            <Stack.Screen name="New Accuont" component={CreateNewAccuont} options={{headerShown:true}}/>
            <Stack.Screen name="Feed" component={BarBottom}/>
            <Stack.Screen name="Home" component={BarBottom}/>
            <Stack.Screen name="Post" component={BarBottom}/>
            <Stack.Screen name="MyPost" component={MyPost}options={{headerShown:true}}/>
            <Stack.Screen name="EditPost" component={EditPost} options={{headerShown:true}}/>
            <Stack.Screen name="Edit Account" component={EditProfileScreen} options={{headerShown:true}}/>
            <Stack.Screen name="ListingDetiails" component={ListingDetiailsScreen} options={{headerShown:true}}/>
            <Stack.Screen name="NewPost" component={NewPost} options={{headerShown:true}}/>
        </Stack.Navigator>
)
};

export default WelcomeNavigator;