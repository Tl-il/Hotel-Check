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
    source={require('../assets/newaccount.png')}>
    <View style={styles.textInput}>

      <AppText style={styles.text}> Name </AppText>
    <AppTextInput placeholder="user name"/>

    <AppText style={styles.text}>Email</AppText>
    <AppTextInput placeholder="hello@gmail.com"/>

    <AppText style={styles.text}> Password </AppText>
    <AppTextInput placeholder="********"/>

    <AppText style={styles.text}>Date of Birthday</AppText>
    <AppTextInput placeholder="13/12/1992"/>
    </View>
    <View style={styles.buttonContainer}>
      <AppButton title="sign up"/>
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
    paddingTop:'70%',
    width:'80%',
    paddingLeft:75,
  },
  text:{
    color:colors.litegray,
  }
})