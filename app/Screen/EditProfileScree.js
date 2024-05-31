import React, { useState, useEffect } from 'react';
import { ImageBackground,View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import { getAuth, updateProfile,signOut } from 'firebase/auth';
import ImageInputList from '../component/Imagecompnent/ImageInputList'; // או כל רכיב אחר להעלאת תמונות
import AppButton from '../component/Button/AppButton'; // רכיב כפתור
import AppTextInput from '../component/AppTextInput'; // רכיב קלט טקסט
import { getFirestore, doc, getDoc ,getStorage,update,updateDoc} from 'firebase/firestore';
import AppText from '../component/AppText';


const UpdateProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');
  const [email, setEmail] = useState('');
  const auth = getAuth();
  const db = getFirestore();
  const user = auth.currentUser;
  
  
  
  useEffect(() => {
    // Fetch user data from Firebase upon component mount
    async function fetchUserData() {
      try {
        
        if (user) {
          const userDocRef = doc(db, "users", user.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setName(userData.name);
            setPictureUrl(userData.pictureUrl);
            setEmail(userData.email);
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserData();
  }, []);

  const updateUserProfile = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      
      if (user) {
        await updateProfile(user, {
          displayName: name,
          photoURL: pictureUrl,
        });

        const db = getFirestore();
        const userDocRef = doc(db, "users", user.uid);
        await updateDoc(userDocRef,{
          name: name,
          pictureUrl: pictureUrl|| 'https://firebasestorage.googleapis.com/v0/b/hotel-check.appspot.com/o/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg?alt=media&token=de546de9-293c-41bd-b63b-9e4d9d062220',
        });

        alert('User profile updated successfully');
        setName(user.displayName);
        setPictureUrl(user.photoURL);
        
       navigation.navigate('Account')
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
      alert('Failed to update user profile');
    }
  };


  return (
    <ImageBackground 
     style={styles.container}
     source={require('../assets/edit-profile.png')}>
      <AppText  editable={false} >your email is:{email}</AppText>
      {/* תיבת טקסט לשם משתמש */}
      <Text style={styles.label}>Name</Text>
      <AppTextInput
        value={name}
        onChangeText={text => setName(text)}
      />

      {/* רכיב להעלאת תמונות */}
      <ImageInputList 
          onAddImage={uri => setPictureUrl(uri)}
        /> 

      {/* כפתור לעדכון הפרופיל */}
      <AppButton title="Update Profile" onPress={updateUserProfile } />

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 100,
  },
});

export default UpdateProfileScreen;
