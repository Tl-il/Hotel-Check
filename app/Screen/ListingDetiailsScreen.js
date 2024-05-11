import React from 'react';
import { Image, View, StyleSheet, } from 'react-native';
import AppText from '../component/AppText';
import ListItem from '../component/ListItem';

function ListingDetiailsScreen({route}) {
    const listing = route.params;
    return (
        <View>
            <Image style={styles.image} source={listing.image}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{listing.title}</AppText> 
            <AppText style={styles.price}>${listing.price}</AppText>
            <AppText style={styles.stars}>⭐{listing.stars}</AppText>
           
            <View style={styles.userContainer}></View>
            <ListItem
            image={require('../assets/profile.jpeg')}
            title="youda levi"
            subTitle="4.3 stars"/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:300,
    },
    detailsContainer:{
        padding:20,

    },
    title:{
        fontSize:30,
        fontWeight:('bold',900),
        

    },
   price:{
    fontSize:24,
    },
    userContainer:{
        marginVertical:10,
    }

})

export default ListingDetiailsScreen;

//לשנות את הפונקציה ליבוא מבחוץ בדומה לcard כולל תמונות