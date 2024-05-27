import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import AppButton from '../component/Button/AppButton';
import AppTextInput from '../component/AppTextInput';
import AppPicker from '../component/AppPicker';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import ImageInputList from "../component/Imagecompnent/ImageInputList";
import colors from "../config/colors";
import { doc, updateDoc, getDoc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const EditPost = ({ navigation, route }) => {
    const [postRating, setPostRating] = useState('');
    const [postLocation, setPostLocation] = useState('');
    const [postContent, setPostContent] = useState('');
    const [postImage, setPostImage] = useState('');

    const auth = getAuth();
    const db = getFirestore();

    useEffect(() => {
        if (route.params?.postId) {
            const fetchPost = async () => {
                const postRef = doc(db, "posts", route.params.postId);
                const postDoc = await getDoc(postRef);
                if (postDoc.exists()) {
                    const postData = postDoc.data();
                    setPostRating(postData.postRating);
                    setPostLocation(postData.postLocation);
                    setPostContent(postData.postContent);
                    setPostImage(postData.postImage);
                }
            };
            fetchPost();
        }
    }, [route.params]);

    const updatePost = async () => {
        try {
            if (route.params?.postId) {
                const postRef = doc(db, "posts", route.params.postId);
                await updateDoc(postRef, {
                    postRating,
                    postContent,
                    postLocation,
                    postImage: postImage || 'https://firebasestorage.googleapis.com/v0/b/hotel-check.appspot.com/o/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg?alt=media&token=de546de9-293c-41bd-b63b-9e4d9d062220'
                });
                alert("Post updated!");
                navigation.navigate('MyPost');
            }
        } catch (error) {
            console.error("Error updating post: ", error);
        }
    };

    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/newpost.png')}>
            <View style={styles.textInput}>
                <AppPicker placeholder="The name of the hotel" style={styles.pickr} />
                <AppTextInput placeholder="rating" value={postRating} onChangeText={text => setPostRating(text)} />
                <AppTextInput placeholder="location" value={postLocation} onChangeText={text => setPostLocation(text)} />
                <AppTextInput placeholder="Tell about your experience.." value={postContent} onChangeText={text => setPostContent(text)} />
                <ImageInputList onAddImage={uri => setPostImage(uri)} />
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Update" onPress={updatePost} />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    buttonContainer: {
        padding: 20,
        width: '130%',
        marginTop: 15,
        marginLeft: '15%',
    },
    textInput: {
        paddingTop: '45%',
        width: '90%',
        paddingLeft: 55,
    },
    text: {
        color: colors.litegray,
    },
    pickr: {
        color: colors.litegray,
        size: 20,
    },
});

export default EditPost;
