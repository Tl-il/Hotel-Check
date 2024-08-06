import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet, FlatList } from 'react-native';
import AppText from '../component/AppText';
import ListItem from '../component/ListItem';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { loadSavedHotels } from '../utility/apiStronge';
import Screen from '../component/Screen';

function ListingDetailsScreen({ route }) {
    const listing = route.params;
    const [hotelDetails, setHotelDetails] = useState(null);
    const [posts, setPosts] = useState([]);

    const fetchPosts = async (hotelName) => {
        const db = getFirestore();
        const q = query(collection(db, "posts"), where("hotelName", "==", hotelName));
        const querySnapshot = await getDocs(q);
        const postsList = querySnapshot.docs.map(doc => doc.data());
        setPosts(postsList);
    };

    useEffect(() => {
        const fetchHotelDetails = async () => {
            const savedHotels = await loadSavedHotels();
            const hotel = savedHotels.find(h => h.id === listing.id);

            if (hotel) {
                setHotelDetails(hotel);
                await fetchPosts(hotel.name);
            }
        };

        fetchHotelDetails();
    }, [listing.id]);

    if (!hotelDetails) {
        return (
            <Screen style={styles.loadingContainer}>
                <AppText>Loading...</AppText>
            </Screen>
        );
    }

    return (
        <View>
            <Image style={styles.image} source={{ uri: listing.image }} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.name}</AppText>
                <AppText style={styles.country}>Country: {listing.country}</AppText>
                <AppText style={styles.city}>City: {listing.city}</AppText>
                <AppText style={styles.stars}>⭐ {listing.rating}</AppText>
                <View style={styles.userContainer}>
                    <FlatList
                        data={posts}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.postContainer}>
                                <ListItem
                                    image={{ uri: item.userImage }}
                                    title={item.userName || 'Unknown User'}
                                    subTitle={item.postRating ? `⭐ ${item.postRating}` : ''}
                                />
                                <View style={styles.postComent}>

                                <AppText style={styles.postContent}> What was the user experience: "{item.postContent}" </AppText>
                                <AppText style={styles.postContent}> Location: "{item.postLocation}"</AppText>
                                {item.postImage && <Image style={styles.postImage} source={{ uri: item.postImage }} />}
                            </View>
                        </View>
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    country: {
        marginBottom: 10,
    },
    city: {
        marginBottom: 10,
    },
    stars: {
        fontSize: 24,
    },
    userContainer: {
        marginVertical: 10,
    },
    postContainer: {
        marginBottom: 20,

    },
    postContent: {
        marginTop: 10,
        
    },
    postImage: {
        width: '20%',
        height: 100,
        marginTop: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});

export default ListingDetailsScreen;
