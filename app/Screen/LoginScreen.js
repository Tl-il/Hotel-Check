import { View, Text, ImageBackground,StyleSheet,resizeMode, TextInput } from 'react-native'
import React from 'react'
import AppButton from '../component/Button/AppButton'
import AppTextInput from '../component/AppTextInput'
import AppText from '../component/AppText'
import colors from '../config/colors'

export default function LoginScreen() {
  return (
    <ImageBackground
    style={styles.background}
    source={require('../assets/login.png')}>
    <View style={styles.textInput}>

      <AppText style={styles.text}> name </AppText>
    <AppTextInput placeholder="user name"/>
    
    <AppText style={styles.text}>password</AppText>
    <AppTextInput placeholder="********"/>
    </View>
    <View style={styles.buttonContainer}>
      <AppButton title="loging"/>
      <AppButton title='create new accuont' color='backgroundcolor'/>
      </View> 
      
      
     
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background:{
    flex:1
  },
  buttonContainer:{
    padding:20,
    width:'130%',
    marginTop:70,
    marginLeft:'15%',
  },
  textInput:{
    paddingTop:'100%',
    width:'80%',
    paddingLeft:70,
  },
  text:{
    color:colors.litegray,
  }
})