import React from 'react';
import { Image, View, StyleSheet, } from 'react-native';
import AppText from '../component/AppText';
import ListItem from '../component/ListItem';
import LikeIcon from '../component/LikeIcon';
import Icon from '../component/Icon';
import MyfavoritesButton from '../component/Button/MyfavoritesButton';



function ListingDetiailsScreen({route}) {
    const listing = route.params;
    return (
        <View>
            <Image style={styles.image} source={listing.image}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{listing.title}</AppText> 
            <AppText style={styles.price}>${listing.price}</AppText>
            <AppText style={styles.stars}>⭐{listing.stars}</AppText>
            <MyfavoritesButton style={styles.myfavoritesbutton}/>
            
           
            <View style={styles.userContainer}></View>
            <ListItem
            image={require('../assets/profile.jpeg')}
            title="youda levi"
            subTitle="4.3 stars"/>
            <LikeIcon/>
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
    },
    myfavoritesbutton:{
        marginLeft:"90%",
    }


})

export default ListingDetiailsScreen;

//לשנות את הפונקציה ליבוא מבחוץ בדומה לcard כולל תמונות