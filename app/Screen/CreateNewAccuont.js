import { View, Text, ImageBackground,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import AppButton from '../component/Button/AppButton'
import AppTextInput from '../component/AppTextInput'
import AppText from '../component/AppText'
import colors from '../config/colors'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore, doc, setDoc } from 'firebase/firestore'; // Import Firestore
import ImageInputList from '../component/Imagecompnent/ImageInputList';
import { StoreUserData } from '../component/Firebase/UserData';

export default function CreateNewAccuont({navigation}) {

const[email,setEmail]=useState();
const[password,setPassword]=useState();
const [name, setName] = useState('');
const [pictureUrl, setPictureUrl] = useState();
  
const auth = getAuth();
const db = getFirestore();

const createUser = async ()=>{
  try {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Update user profile with name and picture URL
  await updateProfile(user, {
    displayName: name,
    photoURL: pictureUrl,
  });

  const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        name: name,
        email: email,
        password: password,
        pictureUrl: pictureUrl,
      });
      // await StoreUserData({
      //   uid: user.uid,
      //   email: user.email,
      //   displayName: user.displayName,
      //   photoURL: user.photoURL,
      // });

      alert('User created');
      navigation.navigate('Feed');

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      alert(errorMessage);


    }
};

  

  // .then((userCredential) => {
  //   const user = userCredential.user;
  //   alert('user created')
  //   user ? navigation.navigate('AccountScreen') : console.log('user created');
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });

  return (
    <ImageBackground
    style={styles.background}
    source={require('../assets/newaccount.png')}>
    <View style={styles.textInput}>

    <AppText style={styles.text}>Name</AppText>
        <AppTextInput
          placeholder="User name"
          onChangeText={text => setName(text)}
        />

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
    
    <ImageInputList setPictureUrl={setPictureUrl} /> 
    <AppText style={styles.text}> Add Profile Picture</AppText>

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