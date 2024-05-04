import React from 'react';
import Screen from '../component/Screen';
import ListItem from '../component/ListItem';
import { StyleSheet, View ,FlatList } from 'react-native';
import colors from '../config/colors';
import Icon from '../component/Icon';
import Separator from '../component/Separator';
import Crad from '../component/ Crad';

const menuItems=[
    {
        title:'My post',
        icon:{
            name:"format-list-bulleted",
            backgoundcolor:colors.primary,
        }
    },
    {
        title:'My favorite posts',
        icon:{
            name:"email",
            backgoundcolor:colors.backgroundcolor,
        }
    },
]

function AccountScreen(props) {
    return (
       <Screen style={styles.screen}>
        <View style={styles.profile}>
            <Crad
            image={require('../assets/profile.jpeg')}
            style={styles.image}
            title={'name'}
            subTitle={'average rank'}
            />
        {/*  מאפשר לעשות את התמונת פרופיל כרשימה ביחד עם כולם<ListItem
        title={'name'} subTitle={'average rank'}
        image={require('../assets/profile.jpeg')}/> */}
        
        </View>
        <View style={styles.containr}>
            <FlatList
            data={menuItems}
            keyExtractor={item=>item.title}
            ItemSeparatorComponent={Separator}
            renderItem={({item})=> 
            <ListItem
            title={item.title}
            IconComponent={<Icon
            name={item.icon.name} backgroundColor={item.icon.backgoundcolor}
            />
        }
        />
            }
            />
        </View>
        <ListItem
        title={'log out'}
        IconComponent={<Icon
        name='logout'
        backgroundColor='blue'
        />
        }
        />
       </Screen>
    );
}
const styles = StyleSheet.create({
    screen:{
        backgroundColor:colors.backgroundcolor,
    },
    containr:{
        marginVertical:20,
    },
    image: {
        width: 140,
        height: 140,
        borderRadius: 70,
      },
      profile:{
        justifyContent:'center',
        alignItems:'center',
      },
})

export default AccountScreen;