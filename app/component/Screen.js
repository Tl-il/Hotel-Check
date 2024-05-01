import React from 'react';
import { SafeAreaView,StyleSheet } from 'react-native';
import Constants from 'expo-constants';

function Screen({Children}) {
    return (
        <SafeAreaView style={styles.screen}>
            {Children}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen:{
        paddingTop:Constants.statusBarHeight
    },
})
export default Screen;