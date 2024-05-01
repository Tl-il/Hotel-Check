import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../config/colors';
import AppText from '../component/AppText';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import DeleteAcition from '../component/Button/DeleteAcition';

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.colseIcon}>
                <MaterialCommunityIcons name='close' color='white' size={35}/>
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons  name='trash-can-outline' color='white' size={35}/>
            </View>
            <Image
                style={styles.image}
                source={require('../assets/welcom.png')} />
        </View>

    );
}
const styles = StyleSheet.create({
    colseIcon: {
        position: 'absolute',
        top: 45,
        left: 20,
    },
    deleteIcon: {
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