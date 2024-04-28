import { View, Text, ImageBackground,StyleSheet } from 'react-native'
import React from 'react'
import AppButton from '../component/Button/AppButton'

export default function LoginScreen() {
  return (
    <ImageBackground
    style={styles.background}
    source={require('../assets/logingpic.png')}>
    <View style={styles.buttonContainer}>
      <AppButton title="loging"/>
      <AppButton title='register' color='backgroundcolor'/>
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
    width:'100%',
    marginTop:'170%',
    marginLeft:'25%',

  }
})