import React from 'react';
import { Text,Platform,StyleSheet} from 'react-native';
import styles from './styles';


function AppText({children}) {
    return (
       <Text style={styles.text}>{children}</Text>
    );
}
export default AppText;