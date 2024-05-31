import React from 'react';
import { View,StyleSheet,Image,TouchableOpacity} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import MyfavoritesButton from './Button/MyfavoritesButton';



function  Crad({title,subTitle,image,style,onPress,imageuri,IconComponent}) {
    return (
        <TouchableOpacity onPress={onPress}> 
      <View style={styles.card}>
      {IconComponent}
        <Image style={[styles.image,style]} source={require=(image)||{imageuri}}/>
        <View style={styles.detailsContanier}>
       <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle} >{subTitle}</AppText>
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

export default  Crad;