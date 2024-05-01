import React from 'react';
import { TouchableOpacity,StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
function DeleteAcition(props) {
    return (
        <TouchableOpacity
        style={styles.container}>
            <MaterialCommunityIcons 
            style={styles.container}
            name='tash-can-outline'/>

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