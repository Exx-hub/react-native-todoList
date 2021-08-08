import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function TodoItem({ text, deleteItem }) {
  const [crossOut, setCrossOut] = useState(false);
  const crossedOut = crossOut ? "line-through" : "none";

  return (
    <View style={styles.todoWrapper}>
      <View style={styles.todoLeft}>
        <TouchableOpacity onPress={() => setCrossOut(!crossOut)}>
          <FontAwesome5 name="check" size={18} style={styles.checkIcon} />
        </TouchableOpacity>
        <Text style={[styles.todoText, { textDecorationLine: crossedOut }]}>
          {text}
        </Text>
      </View>
      <View style={styles.todoRight}>
        <TouchableOpacity onPress={() => deleteItem(text)}>
          <FontAwesome5 name="trash" size={18} style={styles.trashIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todoWrapper: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
  },
  todoLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  checkIcon: {
    color: "red",
  },
  todoText: {
    marginLeft: 10,
    maxWidth: "80%",
  },
  todoRight: {},
  trashIcon: {
    color: "black",
  },
});
