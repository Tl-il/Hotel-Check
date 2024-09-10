import React from 'react';
import Screen from '../component/Screen';
import ListItem from '../component/ListItem';
import { StyleSheet, View, FlatList,resizeMode } from 'react-native';
import colors from '../config/colors';
import Icon from '../component/Icon';
import Separator from '../component/Separator';
import { getAuth, signOut } from "firebase/auth";
import AccountInfo from '../component/Firebase/AccountInfo';




const menuItems = [
    {
        title: 'My post',
        icon: {
            name: "email",
            backgoundcolor: colors.primary,
        },
        targetScreen: "MyPost"
    },
   

]

function AccountScreen({ navigation }) {


    const auth = getAuth();
    const logout = async () => signOut(auth).then(() => {
        signOut ? navigation.navigate('Welcome') : console.log('user not log out try again');

    }).catch((error) => {
    });
    return (
        <Screen style={styles.screen}>
            <View style={styles.profile}>
        
                <AccountInfo/>

            </View>
            <View style={styles.containr}>
                <FlatList
                    data={menuItems}
                    keyExtractor={item => item.title}
                    ItemSeparatorComponent={Separator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={<Icon
                                name={item.icon.name} backgroundColor={item.icon.backgoundcolor}
                            />
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    )}
                />
            </View>
            <ListItem
                title={'log out'}
                IconComponent={<Icon
                    name='logout'
                    backgroundColor='blue'
                />
                }
                onPress={logout}
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.backgroundcolor,
    },
    containr: {
        marginVertical: 20,
    },
    image: {
        width: 130,
        height: 140,
        borderRadius: 70,
        marginLeft: 60,
        marginTop: 30,


    },
    profile: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default AccountScreen;