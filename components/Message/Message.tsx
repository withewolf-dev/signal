import React from "react";
import { View, Text, StyleSheet } from "react-native";

const myId = "u1";
const Message = ({ message }) => {
  const isMe = message.user.id === myId;
  return (
    <View
      style={[
        styles.bubble,
        isMe ? styles.rightContainer : styles.leftContainer,
      ]}
    >
      <Text style={{ color: isMe ? "lightgrey" : "white" }}>
        {message.content}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  leftContainer: {
    backgroundColor: "#353535",

    marginLeft: "auto",
  },
  rightContainer: {
    backgroundColor: "#1357a6",
    // marginLeft: "auto",
    marginRight: "auto",
  },
  bubble: {
    borderRadius: 10,
    padding: 10,
    margin: 10,
    maxWidth: "75%",
  },
});
export default Message;
