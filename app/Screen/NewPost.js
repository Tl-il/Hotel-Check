import react from "react";
import { View, Text, ImageBackground,StyleSheet,resizeMode, TextInput } from 'react-native'
import AppButton from '../component/Button/AppButton'
import AppTextInput from '../component/AppTextInput'
import AppText from '../component/AppText'
import colors from '../config/colors'

export default function NewPost({navigation}) {
  return (
    <ImageBackground
    style={styles.background}
    source={require('../assets/newpost.png')}>
    <View style={styles.textInput}>

    <AppTextInput placeholder="The name of the hotel"/>

    <AppTextInput placeholder="rating"/>

    <AppTextInput placeholder="location"/>
    
    {/* <AppTextInput placeholder="Link to the hotel page"/> */}

    <AppTextInput placeholder="Tell about your experience.."/>

    <AppTextInput placeholder="לשנות לקוביה קטנה להעלת תמונה"/>





    {/* <AppText style={styles.text}>Date of Birthday</AppText>
    <AppTextInput placeholder="13/12/1992"/> */}
    </View>
    <View style={styles.buttonContainer}>
      <AppButton title="share"/>
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
    marginTop:15,
    marginLeft:'15%',
  },
  textInput:{
    paddingTop:'45%',
    width:'90%',
    paddingLeft:55,
  },
  text:{
    color:colors.litegray,
  }
})