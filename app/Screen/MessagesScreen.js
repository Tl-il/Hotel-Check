import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../component/ListItem";
import DeleteAcition from "../component/Button/DeleteAcition";
import Screen from "../component/Screen";
import Sepoarator from '../component/Separator';

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/profile.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/profile.jpeg"),
  },
];

function MessagesScreen({route}) {
  const message = route.params;

  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <DeleteAcition onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={Sepoarator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/profile.jpeg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;