import { View, Text, ImageBackground,StyleSheet,resizeMode, TextInput } from 'react-native'
import React, { useState } from 'react'
import AppButton from '../component/Button/AppButton'
import AppTextInput from '../component/AppTextInput'
import AppText from '../component/AppText'
import colors from '../config/colors'
import { getAuth,signInWithEmailAndPassword} from 'firebase/auth'

export default function LoginScreen({navigation}) {
const[email,setEmail]=useState();
const[password,setPassword]=useState();


const auth = getAuth();

const lognin = async ()=>  {signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert('user login')
    user ? navigation.navigate('Feed') : console.log('user login');
  })
  .catch((error) => {
     const errorCode = alert(error.code);
    const errorMessage =alert(error.nativeErrorMessage);
    switch (error.code) {
      case 'auth/missing-email':
          console.log('missing email');
          break;
      case 'auth/user-disabled':
          console.log('User account is disabled');
          break;
      case 'auth/user-not-found':
          console.log('User not found');
          break;
      case 'auth/missing-password':
          console.log('Wrong password');
          break;
      default:
          console.log('email or password is wrong');
          break;
  }
})
}
  
  return (
    <ImageBackground
    style={styles.background}
    source={require('../assets/login.png')}>
    <View style={styles.textInput}>

      <AppText style={styles.text}> name </AppText>
    <AppTextInput 
    icon='email'
    placeholder="Email"
    autoCapitalize='none'
    autoCorrect={false}
    keyborardType='email-address'
    onChangeText={text=>setEmail(text)}
    textContentType="emailAddress"
    />
    
    <AppText style={styles.text}>password</AppText>
    <AppTextInput
    autoCapitalize='none'
    autoCorrect={false}
    icon='lock'
    onChangeText={text=>setPassword(text)}
    placeholder="********"
    textContentType="password"
    secureTextEntry={true}
    />
    </View>
    <View style={styles.buttonContainer}>
      <AppButton title="loging" onPress={lognin}/>
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
    paddingTop:'80%',
    width:'80%',
    paddingLeft:70,
  },
  text:{
    color:colors.litegray,
  }
})