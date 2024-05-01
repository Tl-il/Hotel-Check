import React from 'react';
import { View,StyleSheet, Image, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

function ListItem({title,subTitle,image,onPress}) {
    return (
        <TouchableHighlight
        underlayColor={colors.grayflash}
        onPress={onPress}
        >
       <View style={styles.continer}>
        <Image style={styles.image} source={image}></Image>
        <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
       </View>
       </TouchableHighlight>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    continer:{
        flexDirection:'row',
        padding:15,
    },

    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:10,
    },
    title:{
        fontWeight:500,

    },
    subTitle:{
        color:colors.litegray,

    },

})