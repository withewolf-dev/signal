import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Message from "../components/Message";
import ChatData from "../Chats";
import MessageInput from "../components/MessageInput";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types";
interface Props {}

const ChatRoomScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, "ChatRoom">>();
  const navigation = useNavigation();
  console.warn(`route${route.params?.id}`);

  //navigation.setOptions({ title: "elon musk" });

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "elon musk",
    });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={ChatData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#151515",
    flex: 1,
  },
});
export default ChatRoomScreen;
