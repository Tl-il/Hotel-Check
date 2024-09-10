import React, { useState,useEffect } from "react";
import { View,Text, ImageBackground, StyleSheet } from 'react-native'
import AppButton from '../component/Button/AppButton'
import AppTextInput from '../component/AppTextInput'
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'; // ה-import החדש
import colors from "../config/colors";
import { addDoc, collection ,getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";
import Starrating from "react-native-star-rating";




const CrateHotels = ({ navigation,route }) => {
    const [rating, setrating] = useState('');
    const [price, setprice] = useState('');
    const [name, setname] = useState('');
    const [image, setImage] = useState('');

    const auth = getAuth();
    const db = getFirestore();
    const user = auth.currentUser;
  
    const createhotel = async () => {
  
      try {
        await addDoc(collection(db, "Hotels"), {
          rating: rating,
          name: name,
          price: price,
          image: image,
        });
        navigation.navigate('Home');
        
        console.log("hotel created!");
        navigation.navigate('Myhotel');
        alert("hotel created!");
      } catch (error) {
        console.error("Error creating hotel: ", error);
      }
    };
    
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (!user) {
          alert("No user is logged in, please log in to create a hotel.");
          navigation.navigate('Welcome');
        }


        
      });
  
      return () => unsubscribe();
    }, []);
    const listing = route.params;
    return (
      <ImageBackground
        style={styles.background}
        source={require('../assets/newpost.png')}>
        <View style={styles.textInput}>
          <Starrating disabled={false} maxStars={5} rating={rating} selectedStar={(rating) => setrating(rating)} fullStarColor={'gold'}/>
          <AppTextInput placeholder="price" onChangeText={text => setprice(text)}/>
          <AppTextInput placeholder="name" onChangeText={text => setname(text)}/>
          <AppTextInput placeholder="pic" onChangeText={uri => setImage(uri)} />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton title="share" onPress={() => {
            createhotel( rating , name, price, image);  
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

export default CrateHotels;
