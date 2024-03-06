import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodoStatus } from "../redux/todosSlice";

export default function Todos() {
  const [todoText, setTodoText] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo({ id: Date.now(), text: todoText.trim() }));
      setTodoText("");
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodoStatus = (id) => {
    dispatch(toggleTodoStatus(id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={todoText}
        onChangeText={setTodoText}
        placeholder="Add a todo"
      />
      <Button title="Add Todo" onPress={handleAddTodo} color="#0066cc" />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <TouchableOpacity onPress={() => handleToggleTodoStatus(item.id)}>
              <Text
                style={[
                  styles.todoText,
                  item.completed && styles.completedTodo,
                ]}
              >
                {item.text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleRemoveTodo(item.id)}
              style={styles.removeButton}
            >
              <Text style={styles.removeButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
  },
  input: {
    marginBottom: 20,
    paddingHorizontal: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
  todoItem: {
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  todoText: {
    fontSize: 18,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  completedTodo: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
  removeButton: {
    marginLeft: 10,
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: "#fff",
  },
  // Add the rest of your styles here
});
