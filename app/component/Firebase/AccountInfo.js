import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import colors from '../../config/colors';
import AppText from '../AppText';
import { getUserData } from './UserData';
import AppButton from '../Button/AppButton';
import { useNavigation } from '@react-navigation/native';

function AccountInfo  ({onPress}) {

  const [userData, setUserData] = useState(null);
  const auth = getAuth();
  const db = getFirestore();
  const navigation=useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;

      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      }
    };

    fetchUserData();
  }, [userData]);

  if (!userData) {
    return(
    <View>
    <AppText style={styles.title}>Welcome to Hotel check</AppText>
    <AppButton title="LogIn or Create Account" onPress={() =>navigation.navigate('Welcome')}/>
    </View>
  ); 
  }

  return (
 <View>
    <View style={styles.card}>
      <Image  source={{uri: userData.pictureUrl || 'https://firebasestorage.googleapis.com/v0/b/hotel-check.appspot.com/o/profile-picture.webp?alt=media&token=356ab582-ef26-411c-ac05-bf4e65b2d863'}} style={styles.image}/>
      <View style={styles.detailsContanier}>
     <AppText style={styles.title}>Hello {userData?.name}</AppText>
      <AppText style={styles.subTitle} >email: {userData?.email}</AppText>
      </View>
      <View>
      <AppButton style={styles.appbutton} title='Edit Profile' onPress={() => navigation.navigate('Edit Account')} />
      </View>
    </View>
    </View>
    
  );
}
const styles = StyleSheet.create({
  card:{
      borderRadius:15,
      backgroundColor:colors.backgroundcolor,
      marginBottom:20,
      overflow:'hidden',
  },

  image:{
      width:'100%',
      height:200,
      borderRadius:100,
      
  },

  detailsContanier:{
      padding: 20,
  },

  title:{
      marginBottom:7,
      paddingTop:20,

  },
  subTitle:{
      fontWeight:'bold',
  },
  appbutton:{
    height:'auto',
    width:'auto',
  }

})

export default AccountInfo;
