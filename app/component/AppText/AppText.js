import React from 'react';
import { Text} from 'react-native';
//import styles from './styles';
import styles from '../../config/styles';


function AppText({children,style, color,onPress}) {
    return (
       <Text style={[styles.text, style, color]} onPress={onPress}>{children}</Text>
    );
}
export default AppText;