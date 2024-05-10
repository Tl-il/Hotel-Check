import React from 'react';
import {resizeMode,ImageBackground,StyleSheet,Button, View,Image,SafeAreaView} from 'react-native';
import AppButton from '../component/Button/AppButton';
import BarBottom from '../navigation/BarBottom';


function WelcomeScreen({navigation}) {
    return (
    <ImageBackground
    style={styles.background} 
    source={require("../assets/home.png")} 
    >
      <View SafeAreaView style={styles.container} >
      </View>
    <View style={styles.letstartButton}>
      <AppButton title="loging" onPress={() =>navigation.navigate('Login')}/>
      <AppButton title='create new accuont' color="button" onPress={()=> navigation.navigate('New Accuont')}/>
      </View> 
            {/* <View style={styles.letstartButton}>
            <AppButton
        title="lets start"
        onPress={() => navigation.navigate("Login")}/>
        </View>
        </View>    */}
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
    marginBottom:'75%',
    },

    
})

export default WelcomeScreen;

//נשאר לבצע מעבר לאחר לחיצה על הכפתור למסך הבא 
//לשנות את הכפתור למעוגל 