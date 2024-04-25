import React from 'react';
import {resizeMode,ImageBackground,StyleSheet,Button, View,Image,SafeAreaView} from 'react-native';

function WelcomeScreen(props) {
    return (
    <ImageBackground
    style={styles.background} 
    source={require("../assets/welcom.png")} 
    >
      <View SafeAreaView style={styles.container} >

        {/* <Image style={styles.letstartButton} 
        source={{
            require:('../assets/lets-start.png'),
            }}
            /> */}  
            <View style={styles.letstartButton}>
            <Button
        color="#FEFCFF"
        title="lets start"
        onPress={() => this.move}/>
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
         marginBottom:120,
         resizeMode:'stretch',
         width: "30%", 
         margin: 10, 
         backgroundColor: "#493d30",
    },

    
})

export default WelcomeScreen;