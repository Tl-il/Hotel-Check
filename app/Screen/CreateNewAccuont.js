import { View, Text, ImageBackground,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import AppButton from '../component/Button/AppButton'
import AppTextInput from '../component/AppTextInput'
import AppText from '../component/AppText'
import colors from '../config/colors'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function CreateNewAccuont({navigation}) {

const[email,setEmail]=useState();
const[password,setPassword]=useState();
  
const auth = getAuth();
const createUser = async ()=>  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert('user created')
    user ? navigation.navigate('AccountScreen') : console.log('user created');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  return (
    <ImageBackground
    style={styles.background}
    source={require('../assets/newaccount.png')}>
    <View style={styles.textInput}>

      <AppText style={styles.text}> Name </AppText>
    <AppTextInput 
    placeholder="user name"/>

    <AppText style={styles.text}>Email</AppText>
    <AppTextInput 
    placeholder="hello@gmail.com"
    icon='email'
    autoCapitalize='none'
    autoCorrect={false}
    keyborardType='email-address'
    onChangeText={text=>setEmail(text)}
    textContentType="emailAddress"/>

    <AppText style={styles.text}> Password </AppText>
    <AppTextInput 
    placeholder="********"
    autoCapitalize='none'
    autoCorrect={false}
    icon='lock'
    onChangeText={text=>setPassword(text)}
    textContentType="password"
    secureTextEntry={true}/>

    {/* <AppText style={styles.text}>Date of Birthday</AppText>
    <AppTextInput placeholder="13/12/1992"/> */}
    </View>
    <View style={styles.buttonContainer}>
      <AppButton title="sign up" onPress={createUser}/>
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
    marginTop:20,
    marginLeft:'15%',
  },
  textInput:{
    paddingTop:'55%',
    width:'80%',
    paddingLeft:75,
  },
  text:{
    color:colors.litegray,
  }
})