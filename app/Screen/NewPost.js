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
          postImage: postImage || 'https://firebasestorage.googleapis.com/v0/b/hotel-check.appspot.com/o/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg?alt=media&token=de546de9-293c-41bd-b63b-9e4d9d062220',
        });
        
        console.log("Post created!");
        navigation.navigate('MyPost');
        alert("Post created!");
      } catch (error) {
        console.error("Error creating post: ", error);
      }
    };
    
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (!user) {
          alert("No user is logged in, please log in to create a post.");
          navigation.navigate('Welcome');
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
            createPost(auth.currentUser.email, postRating , postContent, postLocation, postImage);
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
