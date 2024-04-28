import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../component/AppText';

function ListingDetiailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/hotel1.jpeg')}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>שם המלון</AppText>
            <AppText style={styles.price}>מחיר</AppText>
            <AppText>דירוג</AppText>
            <RankHotel 
            image={require=('../asset/profile.jpeg')} />
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
    }

})

export default ListingDetiailsScreen;

//לשנות את הפונקציה ליבוא מבחוץ בדומה לcard כולל תמונות