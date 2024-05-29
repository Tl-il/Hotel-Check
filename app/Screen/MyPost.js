import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, ImageBackground, Text, View, Alert } from 'react-native';
import 'firebase/storage';
import colors from "../config/colors";
import { collection, getFirestore, getDocs, deleteDoc, doc, query, where } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";
import Crad from  "../component/ Crad";
import Entypo from '@expo/vector-icons/Entypo';

function MyPost({ navigation }) { 
  const [posts, setPosts] = useState([]);
  const auth = getAuth();
  const db = getFirestore();

  const fetchPosts = async () => {
    const user = auth.currentUser;
    if (user) {
      const q = query(collection(db, 'posts'), where("userId", "==", user.uid));
      try {
        const querySnapshot = await getDocs(q);
        const posts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPosts(posts);
        console.log('User posts:', posts);
      } catch (e) {
        console.error('Error fetching user posts:', e);
      }
    } else {
      console.log('No user is signed in.');
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        fetchPosts();
      } else {
        Alert.alert("No user is logged in"); 
      }
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (postId) => {
    try {
      await deleteDoc(doc(db, "posts", postId));
      setPosts(posts.filter(post => post.id !== postId));
      Alert.alert("Post deleted!");
    } catch (error) {
      console.error("Error deleting post: ", error);
      Alert.alert("Error deleting post");
    }
  };

  return (
    <ImageBackground 
      source={require('../assets/mypost.png')}
      style={styles.background}>
      <FlatList
        data={posts}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => (
          <Crad
            style={styles.postContainer}
            title={item.postRating}
            subTitle={item.postContent}
            uri={item.postImage}
            IconComponent={
              <View style={styles.iconContainer}>
                <Entypo
                  name="edit"
                  size={24}
                  color="black"
                  onPress={() => navigation.navigate('EditPost', { postId: item.id })}
                />
                <Entypo
                  name="trash"
                  size={24}
                  color="black"
                  onPress={() => handleDelete(item.id)}
                />
              </View>
            }
          />
        )}
        ListEmptyComponent={<Text style={styles.emptyMessage}>No posts found.</Text>}
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
  emptyMessage: {
    textAlign: 'center',
    marginTop: 250,
    fontSize: 24,
    color: colors.litegray
  },
  iconContainer: {
    width: 70,
    marginLeft: '85%',
    flexDirection: 'row',
  },
});

export default MyPost;
