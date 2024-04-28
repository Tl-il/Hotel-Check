import React from 'react';
import { Text,Platform,StyleSheet} from 'react-native';
import styles from './styles';


function AppText({children,style, color}) {
    return (
       <Text style={[styles.text, style, color]}>{children}</Text>
    );
}
export default AppText;