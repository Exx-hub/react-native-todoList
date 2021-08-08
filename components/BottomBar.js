import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function BottomBar({ handleAddTask }) {
  const [input, setInput] = useState("");

  const addHandler = () => {
    if (input) {
      handleAddTask(input);
      setInput(null);
    } else {
      Keyboard.dismiss();
    }
  };

  return (
    <>
      <TextInput
        style={styles.textInput}
        placeholder="Write a task"
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <TouchableOpacity onPress={addHandler}>
        <FontAwesome name="plus-circle" size={40} color="#333" />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    padding: 15,
    paddingHorizontal: 25,
    width: 280,
  },
});
