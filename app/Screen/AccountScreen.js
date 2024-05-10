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
            name:"email",
            backgoundcolor:colors.primary,
        }
    },
    {
        title:'My favorite posts',
        icon:{
            name:"heart",
            backgoundcolor:colors.primary,
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
            title={'Jiara Martins'}
            subTitle={'hello@reallygreatsite.com'}
            
            />
        {/*  מאפשר לעשות את התמונת פרופיל כרשימה ביחד עם כולם<ListItem
        להוסיף כפתור edit profile
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
        width: 130,
        height: 140,
        borderRadius: 70,
        marginLeft: 60,
        marginTop: 30,

        
      },
      profile:{
        justifyContent:'center',
        alignItems:'center',
      },
})

export default AccountScreen;