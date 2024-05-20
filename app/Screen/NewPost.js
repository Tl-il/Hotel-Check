import react, { useState } from "react";
import { View, Text, ImageBackground,StyleSheet,resizeMode, TextInput } from 'react-native'
import AppButton from '../component/Button/AppButton'
import AppTextInput from '../component/AppTextInput'
import AppText from '../component/AppText'
import colors from '../config/colors'
import ImageInputList from "../component/Imagecompnent/ImageInputList";
import AppPicker from '../component/AppPicker';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { FontAwesome } from '@expo/vector-icons';

const newpost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const db = firebase.firestore();
  const auth = firebase.auth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      try {
        await db.collection("posts").add({
          userId: user.uid,
          title: title,
          content: content,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setTitle("");
        setContent("");
        console.log("Post created!");
      } catch (error) {
        console.error("Error creating post: ", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default function NewPost({navigation}) {
  return (
    <ImageBackground
    style={styles.background}
    source={require('../assets/newpost.png')}>
    <View style={styles.textInput}>

    <AppPicker placeholder="The name of the hotel" style={styles.pickr}/>

    <AppTextInput placeholder="rating"/>

    <AppTextInput placeholder="location"/>
    
    {/* <AppTextInput placeholder="Link to the hotel page"/> */}

    <AppTextInput placeholder="Tell about your experience.."
    onChangeText={text => setPostContent(text)}/>
    
    <ImageInputList/>




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
  },
  pickr:{
    color:colors.litegray,
    size:20,
  },
  
})