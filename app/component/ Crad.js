import React from 'react';
import { View,StyleSheet,Image,} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';



function  Crad({title,subTitle,image}) {
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={require=(image)}/>
        <View style={styles.detailsContanier}>
       <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle} >{subTitle}</AppText>
        </View>
      </View>
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

export default  Crad;