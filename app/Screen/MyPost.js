import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, ImageBackground, Text, View,alert, Image } from 'react-native';
import 'firebase/storage';
import colors from "../config/colors";
import { collection, getFirestore, getDocs } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";
import Crad from '../component/ Crad';
import { FontAwesome } from '@expo/vector-icons';

function MyPost({ navigation }) { 
  const [posts, setPosts] = useState([]);
  const auth = getAuth();
  const db = getFirestore();

  const fetchPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsList);
      console.log("Fetched posts: ", postsList); // הוסף לוג כאן
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        fetchPosts();
      } else {
        alert("No user is logged in"); 
      }
    });

    return () => unsubscribe();
  }, []);
  

  return (
    <ImageBackground 
      source={require('../assets/mypost.png')}
      style={styles.background}>
      <FlatList
        data={posts}
        keyExtractor={posts => posts.id.toString()}
        renderItem={({item}) => (
          <Crad
            style={styles.postContainer}
            title={item.postRating}
            subTitle={item.postContent}
            uri={item.postImage}
            IconComponent={<FontAwesome name="edit" size={24} color="black" style={{padding: 10}}
            onPress={()=>navigation.navigate('EditPost', { postId: item.id })} />}
          />
         
        )}
        ListEmptyComponent={<Text style={styles.emptyMessage}>No posts found.</Text>} // הודעה כאשר אין פוסטים
      />
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  postContainer: {
    padding: 20,

  },
  postTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  emptyMessage: {
    textAlign: 'center',
    marginTop: 250,
    fontSize: 24,
    color: colors.litegray
  }
});

export default MyPost;
