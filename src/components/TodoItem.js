import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TodoItem = ({ title, description }) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <TouchableOpacity onPress={toggleCompleted}>
      <View style={[styles.container, completed && styles.completedContainer]}>
        <Ionicons
          name={completed ? 'checkbox-outline' : 'square-outline'}
          size={24}
          color={completed ? 'gray' : 'black'}
        />
        <View style={{ marginLeft: 14, marginRight:28 }}>
          <Text style={[styles.title, completed && styles.completedText]}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  completedContainer: {
    textDecorationLine: 'line-through',
    backgroundColor: '#F1F6FE',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  completedText: {
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: 'black',
  },
});

export default TodoItem;
