import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../config/colors';
import AppText from '../component/AppText';

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.colseIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image
                style={styles.image}
                source={require('../assets/welcom.png')} />
        </View>

    );
}
const styles = StyleSheet.create({
    colseIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primry,
        position: 'absolute',
        top: 45,
        left: 20,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 45,
        right: 20,
    },
    container: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',

    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

})