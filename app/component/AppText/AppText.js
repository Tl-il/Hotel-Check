import React from 'react';
import { Text} from 'react-native';
//import styles from './styles';
import styles from '../../config/styles';


function AppText({children,style, color}) {
    return (
       <Text style={[styles.text, style, color]}>{children}</Text>
    );
}
export default AppText;