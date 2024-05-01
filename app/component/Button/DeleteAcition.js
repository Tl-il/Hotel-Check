import React from 'react';
import { TouchableOpacity,StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function DeleteAcition({onPress}) {
    return (
        <TouchableOpacity
        onPress={onPress}>
       <View style={styles.container}>
            <MaterialCommunityIcons 
            style={styles.container}
            name='trash-can-outline' size={35} color={'white'}/>
            </View>

        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 45,
        right: 20,
    },
})

export default DeleteAcition;