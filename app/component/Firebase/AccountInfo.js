import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import colors from '../../config/colors';
import AppText from '../AppText';
import { getUserData } from './UserData';

function AccountInfo  ({onPress}) {

  const [userData, setUserData] = useState(null);
  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;

      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userId= user.uid;
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
  const pic= userData.pictureUrl;
  

  return (
    <TouchableOpacity onPress={onPress}> 
    <View style={styles.card}>
      <Image  source={{uri: userData.pictureUrl || 'https://firebasestorage.googleapis.com/v0/b/hotel-check.appspot.com/o/profilepic.webp?alt=media&token=7b07b407-f3c8-4c0e-af0d-311f0f4e5d97'}} style={styles.image}/>

      {/* {userData?.profileImageUrl ? (
        <Image
          style={styles.image}
          source={{ uri: userData.profileImageUrl }}
        />
      
    
      ) : (
        <Image
          style={styles.image}
          source={require("../../assets/profile.jpeg")}
        />
      )} */}
      <View style={styles.detailsContanier}>
     <AppText style={styles.title}>Hello {userData?.name}</AppText>
      <AppText style={styles.subTitle} >{userData?.email}</AppText>
      </View>
    </View>
    </TouchableOpacity>
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
  },

  detailsContanier:{
      padding: 20,
  },

  title:{
      marginBottom:7,

  },
  subTitle:{
      fontWeight:'bold',
  }

})
//     <View style={styles.container}>
//         <Crad
//             // image={{uri: userData.pictureUrl}}
//             image={userData?.profileImageUrl ? (
//               <Image
//                 style={styles.profile}
//                 source={{ uri: userData.profileImageUrl }}
//               />
//             ) : (
//               <Image
//                 style={styles.profile}
//                 source={require("../../assets/profile.jpeg")}
//               />)}
//             style={styles.profileImage}
//             title={userData.name}
//             subTitle={userData.email} 
//             />
//       <Image source={{ uri: userData.pictureUrl }} style={styles.profileImage} />
//       <Text style={styles.text}>Name: {userData.name}</Text>
//       <Text style={styles.text}>Email: {userData.email}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor:'white',
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 20,
//   },
//   text: {
//     fontSize: 18,
//     color: colors.black,
//   },
// });

export default AccountInfo;
