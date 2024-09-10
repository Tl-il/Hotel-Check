import React, { useEffect } from 'react';
import {resizeMode,ImageBackground,StyleSheet,Button, View,Image,SafeAreaView} from 'react-native';
import AppButton from '../component/Button/AppButton';
import AppText from '../component/AppText';
import colors from '../config/colors';
import { getUserData } from '../component/Firebase/UserData';
import routes from '../navigation/routes';


function WelcomeScreen({navigation}) {
  useEffect(() => {
    checkLoggedInUser();
  }, []);

  const checkLoggedInUser = async () => {
    try {
      const userLoggedIn = await getUserData('userLoggedIn');
      if (!userLoggedIn) {
        navigation.navigate('Welcome');
      }
    } catch (error) {

      console.error('Error checking user logged in status:', error);
    }
  };
    return (
    <ImageBackground
    style={styles.background} 
    source={require("../assets/home.png")} 
    >
      <View SafeAreaView style={styles.container} >
      </View>
    <View style={styles.letstartButton}>
      <AppButton title="loging" onPress={() =>navigation.navigate(routes.LOGIN)}/>
      <AppButton title='create new accuont' color="button" onPress={()=> navigation.navigate(routes.REGISTER)}/>
      </View> 
      <View style={styles.text} >
        <AppText onPress={()=>navigation.navigate('Feed')} style={{color:colors.litegray}} >Login without a user</AppText>
      </View>
    </ImageBackground>
    ); 

}

const styles = StyleSheet.create({
    background:{
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        },

    letstartButton:{
    padding:30,
    width:'140%',
    marginLeft:'12%',
    marginBottom:'85%',
    },
    text:{
        alignItems: 'center',
        marginBottom:40,
    }
    

    
})

export default WelcomeScreen;
