import React from 'react';
import { View } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function Icon({
    name,
    size=40,
    backgroundColor =colors.black,
    IconColor =colors.white,
    onPress
}) {
    return (
       <View style={{
        width:size,
        height: size,
        borderRadius: size/2,
        backgroundColor,
        justifyContent:'center',
        alignItems:'center',
       }}>
        <MaterialCommunityIcons name={name} color={IconColor} size={size * 0.5} onPress={onPress} />
       </View>
    );
}

export default Icon;