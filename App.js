import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import TodoItem from "./components/TodoItem";
import BottomBar from "./components/BottomBar";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    console.log(task);
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  };

  const deleteItem = (text) => {
    console.log(text);

    let filtered = tasks.filter((item) => item !== text);
    setTasks(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={styles.title}>Today's Tasks</Text>

        <View style={styles.todoItemWrapper}>
          {/* <FlatList
            // keyExtractor={(item) => item.id}
            data={tasks}
            renderItem={({ item }) => <TodoItem text={item.text} />}
          /> */}
          {tasks.map((item, i) => (
            <TodoItem key={i} text={item} deleteItem={deleteItem} />
          ))}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <BottomBar handleAddTask={handleAddTask} />
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

// review how flatlist works

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  todoItemWrapper: {
    marginTop: 15,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // padding: 20,
  },
});
