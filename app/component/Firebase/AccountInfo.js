import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Crad from '../ Crad';
import colors from '../../config/colors';

function AccountInfo  ({style}) {
  const [userData, setUserData] = useState(null);
  const auth = getAuth();
  const db = getFirestore();

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
  }, []);

  if (!userData) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
        <Crad
            image={{uri: userData.pictureUrl}}
            style={styles.profileImage}
            title={userData.name}
            subTitle={userData.email} 
            />
      {/* <Image source={{ uri: userData.pictureUrl }} style={styles.profileImage} />
      <Text style={styles.text}>Name: {userData.name}</Text>
      <Text style={styles.text}>Email: {userData.email}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: colors.black,
  },
});

export default AccountInfo;
