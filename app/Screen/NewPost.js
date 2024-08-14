import React, { useState,useEffect,useCallback } from "react";
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
import PickerItem from "../component/PickerItem";
import StarRating from "react-native-star-rating";
import ListingDetiailsScreen from "./ListingDetiailsScreen";
import {loadSavedHotels} from '../utility/apiStronge';
import { useFocusEffect } from '@react-navigation/native';



// const hotels = [
//   { label: 'Hotel A', value: 1 },
//   { label: 'Hotel B', value: 2 },
//   { label: 'Hotel C', value: 3 },]

const NewPost = ({ navigation,route }) => {
    const [postRating, setPostRating] = useState('');
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [postLocation, setPostLocation] = useState('');
    const [postContent, setPostContent] = useState('');
    const [postImage, setPostImage] = useState('');
    const [hotels, setHotels] = useState([]);
    const [userName, setUserName] = useState('');
    const [userImage, setUserImage] = useState('');

    const auth = getAuth();
    const db = getFirestore();
    const user = auth.currentUser;

    useEffect(() => {
        if (user) {
            setUserName(user.displayName); // Assumes the displayName is set for the user
            if (user.photoURL) {
                setUserImage(user.photoURL); // Assumes the photoURL is set for the user
            }
        }
    }, [user]);

    useEffect(() => {
        const fetchHotels = async () => {
            const savedHotels = await loadSavedHotels();
            const hotelItems = savedHotels.map(hotel => ({
                label: hotel.name,
                value: hotel.id
            }));
            setHotels(hotelItems);
        };

        fetchHotels();
    }, []);

    // שימוש ב- useFocusEffect כדי לנקות נתונים כאשר הדף יוצא מפוקוס
    useFocusEffect(
        React.useCallback(() => {
            // ניקוי כל הנתונים כאשר המסך יוצא מפוקוס
            return () => {
                setPostRating('');
                setSelectedHotel(null);
                setPostLocation('');
                setPostContent('');
                setPostImage('');
            };
        }, [])
    );

    const createPost = async () => {
        if (!postRating || !selectedHotel || !postContent) {
            alert("All fields are required.");
            return;
        }

        try {
            await addDoc(collection(db, "posts"), {
                userName: userName,
                userId: user.uid,
                userImage: userImage,
                hotelName: selectedHotel.label,
                hotelId: selectedHotel.value,
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

    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/newpost.png')}>
            <View style={styles.textInput}>
                <AppPicker
                    items={hotels}
                    placeholder="Select Hotel"
                    selectedItem={selectedHotel}
                    onSelectItem={(item) => setSelectedHotel(item)}
                />
                <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={postRating}
                    selectedStar={(rating) => setPostRating(rating)}
                    fullStarColor={'gold'}
                />
                <AppTextInput
                    placeholder="Location"
                    value={postLocation}
                    onChangeText={text => setPostLocation(text)}
                />
                <AppTextInput
                    placeholder="Tell about your experience..."
                    value={postContent}
                    onChangeText={text => setPostContent(text)}
                />
                <ImageInputList
                    onAddImage={uri => setPostImage(uri)}
                />
            </View>
            <View style={styles.buttonContainer}>
                <AppButton
                    title="Share"
                    onPress={createPost}
                />
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

export default NewPost;