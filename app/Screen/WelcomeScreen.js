import React from 'react';
import {resizeMode,ImageBackground,StyleSheet,Button, View,Image,SafeAreaView} from 'react-native';
import AppButton from '../component/Button/AppButton';

function WelcomeScreen(props) {
    return (
    <ImageBackground
    style={styles.background} 
    source={require("../assets/welcom.png")} 
    >
      <View SafeAreaView style={styles.container} >
            <View style={styles.letstartButton}>
            <AppButton
        title="lets start"
        onPress={() => console.log("work")}/>
        </View>
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
        marginBottom:'30%',
    },

    
})

export default WelcomeScreen;

//נשאר לבצע מעבר לאחר לחיצה על הכפתור למסך הבא 
//לשנות את הכפתור למעוגל 