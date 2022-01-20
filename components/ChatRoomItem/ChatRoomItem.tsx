import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { RootStackParamList, RootStackScreenProps } from "../../types";
import styles from "./styles";

interface Props {}

const ChatRoomItem = ({ chatRoom }) => {
  const user = chatRoom.users[1];

  type chatRoomprop = NativeStackNavigationProp<RootStackParamList, "ChatRoom">;

  const navigation = useNavigation<chatRoomprop>();

  const onPress = () => {
    navigation.navigate("ChatRoom", { id: chatRoom.id });
  };
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={{
          uri: user.imageUri,
        }}
        style={styles.image}
      />
      {chatRoom.newMessage && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{chatRoom.newMessage}</Text>
        </View>
      )}

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </Pressable>
  );
};

export default ChatRoomItem;
