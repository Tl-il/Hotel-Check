import React, { useState,useEffect } from "react";
import { View,Text, ImageBackground, StyleSheet } from 'react-native'
import AppButton from '../component/Button/AppButton'
import AppTextInput from '../component/AppTextInput'
import AppPicker from '../component/AppPicker';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'; // ה-import החדש
import ImageInputList from "../component/Imagecompnent/ImageInputList";
import colors from "../config/colors";
import { addDoc, collection ,getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";




const NewPost = ({ navigation }) => {
    const [postRating, setPostRating] = useState('');
    const [postLocation, setPostLocation] = useState('');
    const [postContent, setPostContent] = useState('');
    const [postImage, setPostImage] = useState('');

    const auth = getAuth();
    const db = getFirestore();
  
    const createPost = async (userId, postRating, postContent,postLocation,postImage) => {
      try {
        await addDoc(collection(db, "posts"), {
          userId: userId,
          postRating: postRating,
          postContent: postContent,
          postLocation: postLocation,
          postImage: postImage,
        });
        console.log("Post created!");
        alert("Post created!");
      } catch (error) {
        console.error("Error creating post: ", error);
      }
    };
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          createPost(user.uid, postRating, postContent,postLocation,postImage);
        }
      });
  
      return () => unsubscribe();
    }, []);
  
    return (
      <ImageBackground
        style={styles.background}
        source={require('../assets/newpost.png')}>
        <View style={styles.textInput}>
          <AppPicker placeholder="The name of the hotel" style={styles.pickr}/>
          <AppTextInput placeholder="rating" onChangeText={text => setPostRating(text)}/>
          <AppTextInput placeholder="location" onChangeText={text => setPostLocation(text)}/>
          <AppTextInput placeholder="Tell about your experience.." onChangeText={text => setPostContent(text)}/>
          <ImageInputList  onAddImage={uri => setPostImage(uri)} />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton title="share" onPress={() => {
          if (auth.currentUser) {
            createPost(auth.currentUser.uid, postRating , postContent, postLocation, postImage);
          } else {
            console.error("No user is logged in");
          }
        }}/>
        </View>
      </ImageBackground>
    );
  };

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

export default NewPost;
