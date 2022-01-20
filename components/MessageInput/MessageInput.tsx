import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };

  const onPlusClicked = () => {
    console.warn("pressable");
  };
  const sendMessage = () => {
    console.warn("sending", message);
  };
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          name="emotsmile"
          size={24}
          color={"grey"}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="enter message"
          value={message}
          onChangeText={setMessage}
        />
        <Feather name="camera" size={24} color={"grey"} />
        <MaterialCommunityIcons
          name="microphone-outline"
          size={24}
          color={"grey"}
        />
      </View>
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        {message.length === 0 && (
          <AntDesign name="plus" size={24} color={"white"} />
        )}
        {message.length !== 0 && (
          <Ionicons name="send" size={18} color={"white"} />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    padding: 10,
  },
  inputContainer: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderColor: "#dedede",
    flexDirection: "row",
  },
  buttonContainer: {
    // color: "white",
    backgroundColor: "#3777f0",
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },

  buttonColor: {
    color: "white",
    fontSize: 25,
  },
});
export default MessageInput;
