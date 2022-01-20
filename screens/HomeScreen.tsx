import { FlatList, Image, StyleSheet, View } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem";

import EditScreenInfo from "../components/EditScreenInfo";
import { RootTabScreenProps } from "../types";
import ChatRoomData from "../ChatRooms";
export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const chatRoom1 = ChatRoomData[0];
  const chatRoom2 = ChatRoomData[1];
  return (
    <View style={styles.page}>
      <FlatList
        data={ChatRoomData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#202020",
    flex: 1,
  },
});
